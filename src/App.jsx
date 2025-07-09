import React, { useContext, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { CourseProvider, useCourse } from './context/CourseContext';
import { NotificationProvider, useNotification } from './components/Notification/Notification';
import { useEffect } from 'react';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

const WelcomePage = React.lazy(() => import('./pages/WelcomePage/WelcomePage'));
const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const AddCoursePage = React.lazy(() => import('./pages/AddCoursePage'));
const DashboardPage = React.lazy(() => import('./pages/DashboardPage'));
const CuriosityPage = React.lazy(() => import('./pages/CuriosityPage'));
const CommunityPage = React.lazy(() => import('./pages/CommunityPage'));
const ProfilePage = React.lazy(() => import('./pages/ProfilePage'));
const PlayGamesPage = React.lazy(() => import('./pages/PlayGamesPage'));
const CollaborativeWorkspacePage = React.lazy(() => import('./pages/CollaborativeWorkspacePage'));


const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const { currentCourse } = useCourse();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (!currentCourse) {
    return <Navigate to="/add-course" replace />;
  }

  return children;
};

function App() {
  return (
    <AuthProvider>
      <CourseProvider>
        <NotificationProvider>
          <Router>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/add-course" element={<AddCoursePage />} />
              <Route path="/curiosity-platform" element={<CuriosityPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/play-games" element={<PlayGamesPage />} />
              <Route path="/collaborative-workspace" element={<CollaborativeWorkspacePage />} />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <DashboardPage />
                  </PrivateRoute>
                }
              />
            </Routes>
            </Suspense>
          </Router>
        </NotificationProvider>
      </CourseProvider>
    </AuthProvider>
  );
}

export default App;
