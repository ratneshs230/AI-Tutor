import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
    if (token) {
      config.headers['x-auth-token'] = token; // Or 'Authorization': `Bearer ${token}`
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

let notificationFunction = null;

export const setNotificationFunction = (func) => {
  notificationFunction = func;
};

// Add a response interceptor to handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('API Error:', error.response.data);
      if (notificationFunction) {
        notificationFunction(error.response.data.msg || 'An error occurred', 'error');
      }
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Network Error:', error.request);
      if (notificationFunction) {
        notificationFunction('Network error. Please check your internet connection.', 'error');
      }
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error', error.message);
      if (notificationFunction) {
        notificationFunction('An unexpected error occurred.', 'error');
      }
    }
    return Promise.reject(error);
  }
);

export default api;

export const enrollInExam = async (examId, targetDate) => {
  const response = await api.post(`/exams/enrollments`, { examId, targetDate });
  return response.data;
};

export const getExams = async () => {
  const response = await api.get(`/exams`);
  return response.data;
};

export const createExam = async (examData) => {
  const response = await api.post(`/exams`, examData);
  return response.data;
};

export const getUserEnrollments = async () => {
  const response = await api.get(`/exams/enrollments`);
  return response.data;
};

// New API functions using the axios instance
export const registerUser = async (userData) => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};

export const loginUser = async (credentials) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

export const getUserProfile = async () => {
  const response = await api.get('/auth/user');
  return response.data;
};

export const updateUserProfile = async (profileData) => {
  const response = await api.put('/auth/user', profileData);
  return response.data;
};

export const getUserBadges = async () => {
  const response = await api.get(`/badges/user`);
  return response.data;
};

export const initiateDeepCourseSearchApi = async (query) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const lowerCaseQuery = query.toLowerCase();
      if (lowerCaseQuery.includes('found')) {
        resolve({ found: true, course: { id: 'found-exam-id', name: 'Found Exam' } });
      } else if (lowerCaseQuery.includes('notfound')) {
        resolve({ found: false });
      } else if (lowerCaseQuery.includes('new exam') || lowerCaseQuery.includes('ssc cgl')) {
        resolve({ found: true, course: { id: `ai-${Date.now()}`, name: `AI Discovered: ${query}` } });
      } else {
        // Default to success for general inputs to test the success path
        resolve({ found: true, course: { id: `ai-${Date.now()}`, name: `AI Discovered: ${query}` } });
      }
    }, 2000); // Longer delay for deep search
  });
};

// Teacher Brain API calls
export const teacherResearchExam = async (examName) => {
  const response = await api.post('/teacher/research-exam', { examName });
  return response.data;
};

export const teacherGenerateStrategy = async (enrollmentId, targetDate, testResult) => {
  const response = await api.post('/teacher/generate-strategy', { enrollmentId, targetDate, testResult });
  return response.data;
};

export const teacherGenerateDailyAgenda = async (enrollmentId, date, currentProgress) => {
  const response = await api.post('/teacher/generate-daily-agenda', { enrollmentId, date, currentProgress });
  return response.data;
};

export const teacherGenerateContent = async (data) => {
  const response = await api.post('/teacher/generate-content', data);
  return response.data;
};

export const teacherGeneratePractice = async (data) => {
  const response = await api.post('/teacher/generate-practice', data);
  return response.data;
};

export const getContent = async (topic, contentType) => {
  const response = await api.get(`/content/${topic}/${contentType}`);
  return response.data;
};

export const generateCuriosityContent = async (query) => {
  // Assuming the curiosity platform primarily generates text lessons for now
  const response = await api.get(`/content/${query}/text_lesson`);
  return response.data;
};

// Adaptive Coach API calls
export const getLearningStrategyApi = async (enrollmentId) => {
  const response = await api.get(`/adaptive-coach/strategy/${enrollmentId}`);
  return response.data;
};

// Chat API calls
export const getChatMessages = async (chatType, userId) => {
  const response = await api.get(`/chat/?chatType=${chatType}&userId=${userId}`);
  return response.data;
};

export const sendChatMessage = async (messageData) => {
  const response = await api.post('/chat/send', messageData);
  return response.data;
};

// Game API calls
export const generateGame = async (gameData) => {
  const response = await api.post('/games/generate', gameData);
  return response.data;
};

// Study Group API calls
export const getStudyGroups = async (userId) => {
  const response = await api.get(`/study-groups/user/${userId}`);
  return response.data;
};

// User Progress API calls
export const logUserProgress = async (progressData) => {
  const response = await api.post('/progress', progressData);
  return response.data;
};

export const getUserProgress = async (enrollmentId) => {
  const response = await api.get(`/progress/${enrollmentId}`);
  return response.data;
};
