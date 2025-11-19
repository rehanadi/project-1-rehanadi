import React from 'react';

const ProfileContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='custom-container flex w-full max-w-250 flex-col gap-3.75 pt-4 pb-14.5 md:gap-6 md:pt-10 md:pb-27.5'>
      {children}
    </div>
  );
};

export default ProfileContainer;
