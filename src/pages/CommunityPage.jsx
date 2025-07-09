import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button/Button';

const CommunityPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background-color text-text-color p-4">
      <header className="bg-surface-color shadow-md p-4 flex justify-between items-center rounded-md mb-4">
        <h1 className="text-2xl font-bold">Community Hub</h1>
        <Button onClick={() => navigate('/dashboard')} variant="secondary">Back to Dashboard</Button>
      </header>

      <main className="p-4 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section className="bg-surface-color p-6 rounded-md shadow-md">
          <h2 className="text-xl font-semibold text-text-color mb-4">Community Forums</h2>
          <p className="text-text-color-secondary mb-4">Engage with other learners, ask questions, and share insights.</p>
          <ul className="list-disc list-inside text-text-color-secondary space-y-2">
            <li>General Discussion</li>
            <li>Exam Specific Q&A</li>
            <li>Study Tips & Tricks</li>
            <li>Technical Support</li>
          </ul>
          <Button variant="primary" className="mt-6">View All Forums</Button>
        </section>

        <section className="bg-surface-color p-6 rounded-md shadow-md">
          <h2 className="text-xl font-semibold text-text-color mb-4">Study Group Suggestions</h2>
          <p className="text-text-color-secondary mb-4">Find study partners based on your exam, topics, and learning style.</p>
          <div className="space-y-4">
            <div className="border border-border-color p-4 rounded-md">
              <h3 className="text-lg font-semibold text-text-color">Group: UPSC Civil Services</h3>
              <p className="text-text-color-secondary">Topic: Indian History</p>
              <p className="text-text-color-secondary">Members: 3/5</p>
              <Button variant="secondary" size="small" className="mt-2">Join Group</Button>
            </div>
            <div className="border border-border-color p-4 rounded-md">
              <h3 className="text-lg font-semibold text-text-color">Group: JEE Advanced</h3>
              <p className="text-text-color-secondary">Topic: Organic Chemistry</p>
              <p className="text-text-color-secondary">Members: 2/4</p>
              <Button variant="secondary" size="small" className="mt-2">Join Group</Button>
            </div>
          </div>
          <Button variant="primary" className="mt-6">Suggest a New Group</Button>
        </section>
      </main>
    </div>
  );
};

export default CommunityPage;
