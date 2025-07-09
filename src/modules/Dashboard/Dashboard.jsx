import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { useAuth } from '../../context/AuthContext';
import { CourseContext } from '../../context/CourseContext';
import Dropdown from '../../components/Dropdown/Dropdown';
import Button from '../../components/Button/Button';
import UserIcon from '../../components/UserIcon/UserIcon';
import api, { getLearningStrategyApi, getChatMessages, sendChatMessage, generateGame, getContent, teacherGeneratePractice } from '../../utils/api';
import ProgressMapDisplay from '../../components/ProgressMapDisplay/ProgressMapDisplay';
import BadgeDisplay from '../../components/BadgeDisplay/BadgeDisplay';
import GameDisplay from '../../components/GameDisplay/GameDisplay';

const Dashboard = () => {
  const { isLoggedIn, user } = useAuth();
  const { ongoingCourses, currentCourse, setCurrentCourse } = useContext(CourseContext);
  const navigate = useNavigate();

  const [learningStatus, setLearningStatus] = useState('Start Learning'); // 'Start Learning', 'Pause Session', 'Resume Session'
  const [showChatPanel, setShowChatPanel] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [currentChatType, setCurrentChatType] = useState('ai_tutor'); // 'ai_tutor', 'community', 'personal', 'group'
  const [chatInput, setChatInput] = useState('');
  const [isLoadingChat, setIsLoadingChat] = useState(false);
  const [learningPathView, setLearningPathView] = useState('Daily Learning Path'); // 'Daily Learning Path', 'Overall Progress'
  const [learningContent, setLearningContent] = useState(null);
  const [isLoadingContent, setIsLoadingContent] = useState(false);
  const [currentContentType, setCurrentContentType] = useState('text_lesson');
  const [generatedGame, setGeneratedGame] = useState(null);
  const [isLoadingGame, setIsLoadingGame] = useState(false);

  if (!isLoggedIn || !currentCourse) {
    return null; // PrivateRoute handles redirection
  }

  const handleCourseChange = (e) => {
    const selectedCourseId = e.target.value;
    const selectedCourse = ongoingCourses.find(course => course._id === selectedCourseId);
    setCurrentCourse(selectedCourse);
  };

  const fetchLearningContent = async () => {
    setIsLoadingContent(true);
    try {
      // Simulate adaptive coach response for next action
      const simulatedAdaptivePlan = {
        nextAction: Math.random() < 0.5 ? 'content' : (Math.random() < 0.5 ? 'practice' : 'game'),
        topic: "Sample Topic", // This would be dynamic from backend
        contentType: "text_lesson" // For content action
      };

      let fetchedContent = null;
      if (simulatedAdaptivePlan.nextAction === 'content') {
        fetchedContent = await getContent(simulatedAdaptivePlan.topic, simulatedAdaptivePlan.contentType);
      } else if (simulatedAdaptivePlan.nextAction === 'practice') {
        fetchedContent = await teacherGeneratePractice({ topic: simulatedAdaptivePlan.topic });
      } else if (simulatedAdaptivePlan.nextAction === 'game') {
        fetchedContent = await generateGame({ topic: simulatedAdaptivePlan.topic });
      }
      
      setLearningContent({ ...simulatedAdaptivePlan, fetchedContent });

    } catch (error) {
      setLearningContent({ error: 'Failed to load learning content.' });
    } finally {
      setIsLoadingContent(false);
    }
  };

  const handleLearningButtonClick = () => {
    if (learningStatus === 'Start Learning' || learningStatus === 'Resume Session') {
      setLearningStatus('Pause Session');
      fetchLearningContent(); // Fetch content when learning starts/resumes
    } else {
      setLearningStatus('Resume Session');
    }
  };

  const handleTakeQuiz = () => {
  };

  const handleChatIconClick = () => {
    setShowChatPanel(!showChatPanel);
    if (!showChatPanel) {
      // Fetch messages when chat panel opens
      fetchChatMessages(currentChatType, user.id); // Assuming user.id is available
    }
  };

  const fetchChatMessages = async (type, id) => {
    setIsLoadingChat(true);
    try {
      const response = await api.get(`/chat/?chatType=${type}&userId=${id}`);
      setChatMessages(response.data);
    } catch (error) {
      setChatMessages([{ messageText: `Failed to load ${type} chat messages.` }]);
    } finally {
      setIsLoadingChat(false);
    }
  };

  const handleSendMessage = async () => {
    if (!chatInput.trim()) return;

    const messageData = {
      senderId: user.id,
      chatType: currentChatType,
      messageText: chatInput,
      // For personal/group/community chats, chatRoomId would be needed
      chatRoomId: currentChatType === 'ai_tutor' ? user._id : null, // Dummy for AI Tutor
      chatRoomType: currentChatType === 'ai_tutor' ? 'User' : null,
    };

    try {
      const response = await sendChatMessage(messageData);
      setChatInput('');
      // Re-fetch messages to update the chat window
      fetchChatMessages(currentChatType, user.id);
    } catch (error) {
    }
  };

  const handlePlayGames = async () => {
    setIsLoadingGame(true);
    try {
      // Dummy data for game generation. In a real scenario, this would be dynamic.
      const gameData = {
        examId: currentCourse._id,
        topic: "Physics Concepts", // This would be dynamically determined by Adaptive Coach
        gameType: "Physics Puzzle",
        gameAssets: { /* dummy assets */ },
        gameLogic: { /* dummy logic */ }
      };
      const response = await generateGame(gameData);
      setGeneratedGame(response.data.game);
    } catch (error) {
      setGeneratedGame({ error: 'Failed to generate game.' });
    } finally {
      setIsLoadingGame(false);
    }
  };

  return (
    <div className="min-h-screen bg-background-color text-text-color p-4">
      <header className="bg-surface-color shadow-md p-4 flex justify-between items-center rounded-md">
        <h1 className="text-2xl font-bold">AI Tutor Dashboard</h1>
        <div className="flex items-center space-x-4">
          <Dropdown
            options={ongoingCourses.map(course => ({ value: course._id, label: course.name }))}
            value={currentCourse._id}
            onChange={handleCourseChange}
            label="Select Course"
          />
          <UserIcon onClick={() => navigate('/profile')} />
        </div>
      </header>

      <main className="p-4 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="bg-surface-color p-6 rounded-md shadow-md">
          <h2 className="text-xl font-semibold text-text-color mb-4">Dashboard for {currentCourse.name}</h2>
        </section>

        <section className="bg-surface-color p-6 rounded-md shadow-md">
          <div className="flex space-x-2 mb-4">
            <Button
              onClick={() => setLearningPathView('Daily Learning Path')}
              variant={learningPathView === 'Daily Learning Path' ? 'primary' : 'secondary'}
            >
              Daily Learning Path
            </Button>
            <Button
              onClick={() => setLearningPathView('Overall Progress')}
              variant={learningPathView === 'Overall Progress' ? 'primary' : 'secondary'}
            >
              Overall Progress
            </Button>
          </div>
          {learningPathView === 'Daily Learning Path' ? (
            <div>
              <h3 className="text-xl font-semibold text-text-color mb-4">Daily Learning Path Placeholder</h3>
              <p className="text-text-color-secondary">Visual representation of today's learning journey.</p>
              <p className="text-text-color-secondary">Upcoming topics: Topic A, Topic B</p>
            </div>
          ) : (
            <div>
              <h3 className="text-xl font-semibold text-text-color mb-4">Overall Progress</h3>
              <ProgressMapDisplay progressData={{ completedTopics: 10, totalTopics: 50, overallCompletionPercentage: 20, nextMilestone: "Complete Module 2" }} />
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-text-color mb-4">Earned Badges</h3>
                <BadgeDisplay badges={[{ _id: '1', badgeId: { imageUrl: '/images/user-icon.png', badgeName: 'First Step', description: 'Completed your first lesson' }, earnedAt: new Date() }]} />
              </div>
            </div>
          )}
        </section>

        <section className="bg-surface-color p-6 rounded-md shadow-md">
          <h2 className="text-xl font-semibold text-text-color mb-4">Leaderboard</h2>
          <p className="text-text-color-secondary">Top performers in various topics and behaviors will be listed here.</p>
        </section>

        <section className="bg-surface-color p-6 rounded-md shadow-md">
          <h2 className="text-xl font-semibold text-text-color mb-4">Today's Learning Content Area</h2>
          {isLoadingContent ? (
            <LoadingSpinner className="text-primary-color" />
          ) : learningContent ? (
            <div>
              <h3 className="text-lg font-semibold text-text-color mb-2">Adaptive Plan Details:</h3>
              <p className="text-text-color-secondary">Path Adjustment: {learningContent.pathAdjustment}</p>
              <p className="text-text-color-secondary">Content Trigger: {learningContent.contentTrigger}</p>
              <p className="text-text-color-secondary">Predictive Analytics: {learningContent.predictiveAnalytics}</p>
              {learningContent.error && <p className="text-error-color font-bold mt-2">{learningContent.error}</p>}
            </div>
          ) : (
            <p className="text-text-color-secondary">The 'Designer Brain' will dynamically populate this with multi-modal content (text, visuals, audio, video, 3D models, games).</p>
          )}
          <div className="flex space-x-2 mt-4">
            <Button variant="secondary">Text Lesson</Button>
            <Button variant="secondary">Interactive Illustration</Button>
            <Button variant="secondary">Video Explanation</Button>
            <Button variant="secondary">Audio Clip</Button>
          </div>
          <Button onClick={handleLearningButtonClick} className="mt-4">
            {learningStatus}
          </Button>
        </section>

        <section className="agendaTests bg-surface-color p-6 rounded-md shadow-md">
          <div className="agenda mb-6">
            <h2 className="text-xl font-semibold text-text-color mb-4">Today's Agenda</h2>
            <ul className="list-disc list-inside text-text-color-secondary">
              <li>Topic 1: Newton's Laws</li>
              <li>Topic 2: Chemical Bonding Basics</li>
            </ul>
          </div>
          <div className="tests">
            <h2 className="text-xl font-semibold text-text-color mb-4">Today's Tests</h2>
            <Button onClick={handleTakeQuiz} variant="primary">Take Today's Quiz</Button>
          </div>
        </section>

        <section className="navigationLinks bg-surface-color p-6 rounded-md shadow-md">
          <Button onClick={() => navigate('/community')} variant="primary" className="w-full mb-2">Community Page</Button>
          <Button onClick={handlePlayGames} disabled={isLoadingGame} variant="primary" className="w-full">
            {isLoadingGame ? 'Generating Game...' : 'Play Games'}
          </Button>
        </section>

        {generatedGame && (
          <section className="lg:col-span-3 bg-surface-color p-6 rounded-md shadow-md">
            <GameDisplay gameData={generatedGame} />
          </section>
        )}
      </main>

      <div className="fixed bottom-4 right-4 bg-primary-color text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-primary-color-hover transition-colors duration-200" onClick={handleChatIconClick}>
        💬
      </div>

      {showChatPanel && (
        <div className="fixed bottom-0 right-0 w-full md:w-96 h-3/4 md:h-auto bg-surface-color rounded-md shadow-xl flex flex-col z-40 transform transition-transform duration-300 ease-in-out animate-slide-in-up">
          <div className="flex justify-between items-center p-4 border-b border-border-color">
            <h3 className="text-lg font-semibold text-text-color">Chat ({currentChatType.replace('_', ' ').toUpperCase()})</h3>
            <Button variant="ghost" onClick={handleChatIconClick}>X</Button>
          </div>
          <div className="flex-grow p-4 overflow-y-auto">
            {isLoadingChat ? (
              <LoadingSpinner className="text-primary-color" />
            ) : (
              <div className="space-y-3">
                {chatMessages.length > 0 ? (
                  chatMessages.map((msg, index) => (
                    <div key={index} className="bg-background-color p-3 rounded-md shadow-sm">
                      <strong className="text-primary-color">{msg.senderId && msg.senderId.name ? msg.senderId.name : 'AI Tutor'}:</strong> <span className="text-text-color-secondary">{msg.messageText}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-text-color-secondary text-center">No messages yet.</p>
                )}
              </div>
            )}
          </div>
          <div className="p-4 border-t border-border-color">
            <div className="flex mb-3">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow border border-border-color rounded-l-md py-2 px-3 bg-surface-color text-text-color focus:outline-none focus:ring-2 focus:ring-primary-color focus:border-primary-color"
              />
              <Button onClick={handleSendMessage} disabled={isLoadingChat} className="rounded-l-none">Send</Button>
            </div>
            <div className="flex justify-around space-x-2">
              <Button variant="secondary" size="small" onClick={() => setCurrentChatType('ai_tutor')}>AI Tutor</Button>
              <Button variant="secondary" size="small" onClick={() => setCurrentChatType('community')}>Community</Button>
              {/* Add more chat type buttons as needed */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
