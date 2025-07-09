import React from 'react';

const ProgressMapDisplay = ({ progressData }) => {
  if (!progressData) {
    return <p className="text-text-color-secondary">No progress data available. Start your learning journey!</p>;
  }

  return (
    <div className="p-4 border border-border-color rounded-lg shadow-sm bg-surface-color">
      <h4 className="text-lg font-semibold text-text-color mb-2">Your Learning Journey Progress</h4>
      <p className="text-text-color-secondary mb-2">Visual representation of your progress in the course.</p>
      <div className="bg-background-color border border-dashed border-border-color p-8 rounded-md text-center text-text-color-secondary">
        <p>Imagine a beautiful constellation or a quest path here!</p>
        <p>Completed: {progressData.completedTopics || 0} / {progressData.totalTopics || 0} Topics</p>
        <p>Overall Completion: {progressData.overallCompletionPercentage || 0}%</p>
      </div>
      {progressData.nextMilestone && (
        <p className="text-text-color-secondary mt-4">
          Next Milestone: <span className="font-semibold">{progressData.nextMilestone}</span>
        </p>
      )}
    </div>
  );
};

export default ProgressMapDisplay;
