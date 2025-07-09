import React, { createContext, useState, useContext, useEffect } from 'react';
import { getUserEnrollments } from '../utils/api';
import { useAuth } from './AuthContext';

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [ongoingCourses, setOngoingCourses] = useState([]);
  const [currentCourse, setCurrentCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const { authToken, user } = useAuth();

  useEffect(() => {
    const loadUserCourses = async () => {
      if (authToken && user) {
        try {
          const enrollments = await getUserEnrollments();
          const courses = enrollments.map(e => ({ id: e.exam_id._id, name: e.exam_id.exam_name, enrollmentId: e._id }));
          setOngoingCourses(courses);
          if (courses.length > 0) {
            setCurrentCourse(courses[0]);
          }
        } catch (error) {
          console.error('Failed to fetch user courses:', error);
        }
      }
      setLoading(false);
    };

    loadUserCourses();
  }, [authToken, user]);

  const addCourse = (course) => {
    setOngoingCourses((prevCourses) => [...prevCourses, course]);
  };

  const clearCourses = () => {
    setOngoingCourses([]);
    setCurrentCourse(null);
  };

  return (
    <CourseContext.Provider value={{ ongoingCourses, addCourse, clearCourses, currentCourse, setCurrentCourse, loading }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = () => useContext(CourseContext);

