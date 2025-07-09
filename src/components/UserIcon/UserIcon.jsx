import React from 'react';

const UserIcon = ({ className, ...props }) => {
  return (
    <div className={`absolute top-4 right-4 w-10 h-10 rounded-full overflow-hidden cursor-pointer ${className}`} {...props}>
      <img src="/images/user-icon.png" alt="User Icon" className="w-full h-full object-cover" />
    </div>
  );
};

export default UserIcon;