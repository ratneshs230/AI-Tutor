import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';
import Checkbox from '../../components/Checkbox/Checkbox';
import Dropdown from '../../components/Dropdown/Dropdown';
import { loginUser, registerUser, updateUserProfile } from '../../utils/api';
import { useAuth } from '../../context/AuthContext';
import { CourseContext } from '../../context/CourseContext';
import { useNotification } from '../../components/Notification/Notification';

const LoginModule = () => {
  const [isLoginView, setIsLoginView] = useState(true);
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  // Profile form state
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [isStudent, setIsStudent] = useState(false);
  const [board, setBoard] = useState('');
  const [studentClass, setStudentClass] = useState('');

  const navigate = useNavigate();
  const { login, authToken } = useAuth();
  const { ongoingCourses } = useContext(CourseContext);
  const { showNotification } = useNotification();

  const handleNavigationAfterAuth = () => {
    if (ongoingCourses && ongoingCourses.length > 0) {
      navigate('/dashboard');
    } else {
      navigate('/');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { token } = await loginUser({ email, password });
      login(token); // AuthContext will fetch the user
      handleNavigationAfterAuth();
    } catch (err) {
      showNotification(err.response?.data?.msg || err.message || 'Login failed', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userData = {
        email,
        password,
        phone: phoneNumber,
        name: email, // Placeholder name, user will update in the next step
        age: 18, // Placeholder age
        gender: 'Prefer not to say', // Placeholder gender
        is_student: false, // Default to false during initial registration
      };
      const { token } = await registerUser(userData);
      login(token); // AuthContext will handle the token
      setShowProfileForm(true); // Show profile form after successful signup
    } catch (err) {
      showNotification(err.response?.data?.msg || err.message || 'Signup failed', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleProfileSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const profileData = { name, age, gender, is_student: isStudent };
      if (isStudent) {
        profileData.student_details = { board, class: studentClass };
      }
      const updatedUser = await updateUserProfile(profileData);
      // Update the user in the context after saving the profile
      login(authToken, updatedUser);
      handleNavigationAfterAuth();
    } catch (err) {
      showNotification(err.response?.data?.msg || err.message || 'Profile save failed', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    // Implement social login logic here
    showNotification('Social login not yet implemented.', 'info');
  };

  

  

  const genderOptions = [
    { value: '', label: 'Select Gender' },
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
    { value: 'prefer_not_to_say', label: 'Prefer not to say' },
  ];

  const boardOptions = [
    { value: '', label: 'Select Board' },
    { value: 'cbse', label: 'CBSE' },
    { value: 'icse', label: 'ICSE' },
    { value: 'state_board', label: 'State Board' },
    { value: 'other', label: 'Other' },
  ];

  const classOptions = [
    { value: '', label: 'Select Class' },
    { value: 'nursery', label: 'Nursery' },
    { value: 'kg', label: 'KG' },
    { value: '1st', label: '1st' },
    { value: '2nd', label: '2nd' },
    { value: '3rd', label: '3rd' },
    { value: '4th', label: '4th' },
    { value: '5th', label: '5th' },
    { value: '6th', label: '6th' },
    { value: '7th', label: '7th' },
    { value: '8th', label: '8th' },
    { value: '9th', label: '9th' },
    { value: '10th', label: '10th' },
    { value: '11th', label: '11th' },
    { value: '12th', label: '12th' },
    { value: 'graduate', label: 'Graduate' },
    { value: 'post_graduate', label: 'Post-Graduate' },
    { value: 'other', label: 'Other' },
  ];

  if (showProfileForm) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-color p-4">
        <div className="bg-surface-color p-8 rounded-lg shadow-xl w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Complete Your Profile</h2>
          <form onSubmit={handleProfileSave}>
            <InputField
              label="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <InputField
              label="Age"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
            <Dropdown
              label="Gender"
              options={genderOptions}
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            />
            <Checkbox
              label="Are you currently in school?"
              checked={isStudent}
              onChange={(e) => setIsStudent(e.target.checked)}
            />
            {isStudent && (
              <>
                <Dropdown
                  label="Board"
                  options={boardOptions}
                  value={board}
                  onChange={(e) => setBoard(e.target.value)}
                  required
                />
                <Dropdown
                  label="Class"
                  options={classOptions}
                  value={studentClass}
                  onChange={(e) => setStudentClass(e.target.value)}
                  required
                />
              </>
            )}
            <Button type="submit" disabled={loading} className="w-full mt-4">
              {loading ? 'Saving Profile...' : 'Save Profile'}
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background-color p-4">
      <div className="bg-surface-color p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">{isLoginView ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={isLoginView ? handleLogin : handleSignup}>
          <InputField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <InputField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {!isLoginView && (
            <InputField
              label="Phone Number (Optional)"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          )}
          <Checkbox
            label="Remember Me"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? (isLoginView ? 'Logging In...' : 'Signing Up...') : (isLoginView ? 'Login' : 'Sign Up')}
          </Button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-600">- OR -</p>
          <Button onClick={() => handleSocialLogin('Google')} variant="secondary" className="w-full mt-4">Login with Google</Button>
          <Button onClick={() => handleSocialLogin('Facebook')} variant="secondary" className="w-full mt-2">Login with Facebook</Button>
          <Button onClick={() => handleSocialLogin('Instagram')} variant="secondary" className="w-full mt-2">Login with Instagram</Button>
        </div>
        <p className="mt-4 text-center text-gray-600">
          {isLoginView ? 'Don\'t have an account?' : 'Already have an account?'}{' '}
          <span className="text-blue-600 cursor-pointer font-bold hover:underline" onClick={() => setIsLoginView(!isLoginView)}>{isLoginView ? 'Sign Up' : 'Login'}</span>
        </p>
      </div>
    </div>
  );
};

export default LoginModule;
