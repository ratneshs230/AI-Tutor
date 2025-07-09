import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button/Button';

const CollaborativeWorkspacePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background-color text-text-color p-4">
      <header className="bg-surface-color shadow-md p-4 flex justify-between items-center rounded-md mb-4">
        <h1 className="text-2xl font-bold">Collaborative Workspace</h1>
        <Button onClick={() => navigate('/dashboard')} variant="secondary">Back to Dashboard</Button>
      </header>

      <main className="p-4 md:p-8">
        <section className="bg-surface-color p-6 rounded-md shadow-md text-center">
          <h2 className="text-xl font-semibold text-text-color mb-4">Digital Whiteboard Placeholder</h2>
          <p className="text-text-color-secondary mb-4">This area will feature a real-time collaborative digital whiteboard for group problem-solving.</p>
          <div className="w-full h-96 bg-gray-200 rounded-md flex items-center justify-center text-gray-500 text-lg font-medium">
            [Interactive Whiteboard Area]
          </div>
          <Button variant="primary" className="mt-6">Start New Session</Button>
          <Button variant="secondary" className="mt-6 ml-4">Join Existing Session</Button>
        </section>
      </main>
    </div>
  );
};

export default CollaborativeWorkspacePage;