import React from 'react';

const BadgeDisplay = ({ badges }) => {
  if (!badges || badges.length === 0) {
    return <p className="text-text-color-secondary">No badges earned yet. Keep learning!</p>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {badges.map((userBadge) => (
        <div key={userBadge._id} className="flex flex-col items-center p-4 border border-border-color rounded-lg shadow-sm bg-surface-color">
          <img
            src={userBadge.badgeId.imageUrl}
            alt={userBadge.badgeId.badgeName}
            className="w-24 h-24 object-contain mb-2"
            loading="lazy"
          />
          <h4 className="text-md font-semibold text-text-color text-center">{userBadge.badgeId.badgeName}</h4>
          <p className="text-sm text-text-color-secondary text-center">{userBadge.badgeId.description}</p>
          <p className="text-xs text-text-color-secondary mt-1">Earned: {new Date(userBadge.earnedAt).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default BadgeDisplay;
