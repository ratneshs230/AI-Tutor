import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import UserIcon from '../../components/UserIcon/UserIcon';
import Button from '../../components/Button/Button';
import Dropdown from '../../components/Dropdown/Dropdown';
import { useAuth } from '../../context/AuthContext';
import { CourseContext } from '../../context/CourseContext';

const WelcomePage = () => {
  const { isLoggedIn } = useAuth();
  const { ongoingCourses, setCurrentCourse } = useContext(CourseContext);
  const navigate = useNavigate();

  const renderButtons = () => {
    if (!isLoggedIn) {
      return (
        <>
          <Button as={Link} to="/login">Login</Button>
          <Button as={Link} to="/curiosity-platform">Curiosity</Button>
        </>
      );
    } else {
      // User is logged in
      return (
        <>
          {ongoingCourses.length > 0 ? (
            ongoingCourses.length === 1 ? (
              <Button as={Link} to="/dashboard">Continue</Button>
            ) : (
              <Dropdown
                label="Continue"
                options={ongoingCourses.map(course => ({ value: course.id, label: course.name }))}
                onChange={(e) => {
                  const selectedCourseId = e.target.value;
                  const selectedCourse = ongoingCourses.find(course => course.id === selectedCourseId);
                  if (selectedCourse) {
                    setCurrentCourse(selectedCourse);
                    navigate('/dashboard');
                  }
                }}
              />
            )
          ) : (
            <Button as={Link} to="/add-course">Add Course</Button>
          )}
          <Button as={Link} to="/curiosity-platform">Curiosity</Button>
        </>
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background-color text-text-color p-4">
      <UserIcon />
      <h1 className="text-5xl font-black text-primary-color mb-4">Welcome to AI Tutor</h1>
      <p className="text-xl text-text-color-secondary mb-8">Your personalized learning companion.</p>
      <div className="flex space-x-4">{renderButtons()}</div>
    </div>
  );
};

export default WelcomePage;