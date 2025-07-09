import React, { useState, useEffect, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';
import Checkbox from '../../components/Checkbox/Checkbox';
import DatePicker from '../../components/DatePicker/DatePicker';
import SuggestionsList from '../../components/SuggestionsList/SuggestionsList';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { getExams, enrollInExam, initiateDeepCourseSearchApi, createExam } from '../../utils/api';
import { CourseContext } from '../../context/CourseContext';
import { useAuth } from '../../context/AuthContext';
import { useNotification } from '../../components/Notification/Notification';

const AddCourseModule = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [allExams, setAllExams] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [targetDate, setTargetDate] = useState('');
  const [deepSearchLoading, setDeepSearchLoading] = useState(false);
  const { showNotification } = useNotification();

  const { addCourse } = useContext(CourseContext);
  const { user } = useAuth();
  const navigate = useNavigate();

  const debounceTimeoutRef = useRef(null);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const exams = await getExams();
        setAllExams(exams);
      } catch (error) {
        showNotification('Could not load exams.', 'error');
      }
    };
    fetchExams();
  }, []);

  useEffect(() => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    if (searchQuery.length > 2) {
      debounceTimeoutRef.current = setTimeout(() => {
        const filtered = allExams.filter(exam =>
          exam.exam_name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSuggestions(filtered);
      }, 300); // Debounce for 300ms
    } else {
      setSuggestions([]);
    }
  }, [searchQuery, allExams]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setSelectedCourse(null); // Clear selected course when search query changes
  };

  const handleSelectSuggestion = (course) => {
    setSelectedCourse(course);
    setSearchQuery(course.exam_name); // Populate search bar with selected course name
    setSuggestions([]); // Clear suggestions
  };

  const handleDeepSearch = async () => {
    setDeepSearchLoading(true);
    try {
      const result = await initiateDeepCourseSearchApi(searchQuery);
      if (result.found) {
        showNotification(`New Exam Discovered and Added: ${result.course.name}!`, 'success');
        setSelectedCourse(result.course);
      } else {
        showNotification('Exam not found. Please try a different query.', 'error');
        setSelectedCourse(null); // Ensure selectedCourse is null on failure
      }
    } catch (error) {
      showNotification('An error occurred during deep search.', 'error');
      setSelectedCourse(null); // Ensure selectedCourse is null on error
    } finally {
      setDeepSearchLoading(false);
    }
  };

  const handleAddCourse = async () => {
    if (!selectedCourse) {
      showNotification('Please select a course or perform a deep search.', 'error');
      return;
    }
    if (showDatePicker && !targetDate) {
      showNotification('Please select a target date.', 'error');
      return;
    }

    try {
      // Assuming selectedCourse from deep search also has an _id or similar identifier
      let examIdToEnroll = selectedCourse.id;

      // If the course is an AI-discovered course (temporary ID), create it in the backend first
      if (selectedCourse.id && selectedCourse.id.startsWith('ai-')) {
        try {
          const newExam = await createExam({
            exam_name: selectedCourse.name,
            description: selectedCourse.description || 'AI Discovered Exam',
            // Add other necessary fields for Exam model if available from deep search
            // For now, using minimal required fields.
          });
          examIdToEnroll = newExam._id; // Use the actual MongoDB _id
          showNotification(`AI Discovered Exam '${newExam.exam_name}' created in database.`, 'info');
        } catch (createError) {
          showNotification('Failed to create AI Discovered Exam in database.', 'error');
          return; // Stop if exam creation fails
        }
      } else {
        examIdToEnroll = selectedCourse._id;
      }

      const enrollment = await enrollInExam(examIdToEnroll, targetDate);
      addCourse({ ...selectedCourse, name: selectedCourse.exam_name, _id: examIdToEnroll, enrollmentId: enrollment._id }); // Update global course state with actual _id
      showNotification(`Course '${selectedCourse.name}' Added Successfully!`, 'success');
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
    } catch (error) {
      showNotification('Failed to add course.', 'error');
    }
  };

  return (
    <div className="p-8 max-w-3xl mx-auto my-8 bg-surface-color rounded-lg shadow-xl">
      <h2 className="text-center text-3xl font-bold text-text-color mb-6">Add New Course</h2>

      <InputField
        label="Course Search"
        type="text"
        placeholder="Search for a course (e.g., JEE Main, UPSC CSE)"
        value={searchQuery}
        onChange={handleSearchChange}
      />

      {suggestions.length > 0 && (
        <SuggestionsList
          suggestions={suggestions.map(s => ({...s, name: s.exam_name}))}
          onSelectSuggestion={handleSelectSuggestion}
        />
      )}

      {selectedCourse && (
        <p className="mt-4 text-lg text-gray-700">Selected Course: <strong className="font-semibold">{selectedCourse.name}</strong></p>
      )}

      {!selectedCourse && searchQuery.length > 2 && !deepSearchLoading && (
        <div className="mt-6 flex flex-col items-center">
          <p className="text-gray-600">Course not found in suggestions?</p>
          <Button
            onClick={handleDeepSearch}
            disabled={deepSearchLoading}
            className="mt-4"
          >
            Initiate Deep Search
          </Button>
        </div>
      )}

      {deepSearchLoading && (
        <div className="mt-6 text-center">
          <LoadingSpinner className="h-5 w-5 text-blue-500" />
          <p className="text-gray-600">Searching for course...</p>
        </div>
      )}

      <div className="mt-6">
        <Checkbox
          label="Set Target Date"
          checked={showDatePicker}
          onChange={() => setShowDatePicker(!showDatePicker)}
        />
        {showDatePicker && (
          <DatePicker
            label="Target Date"
            value={targetDate}
            onChange={(e) => setTargetDate(e.target.value)}
          />
        )}
      </div>

      <div className="mt-8 text-center">
        <Button
          onClick={handleAddCourse}
          disabled={!selectedCourse || deepSearchLoading}
          variant="primary"
          size="large"
        >
          Add Course
        </Button>
      </div>
    </div>
  );
};

export default AddCourseModule;
