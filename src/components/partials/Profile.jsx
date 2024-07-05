import React from 'react';
import { useUser } from '@clerk/clerk-react';

const Profile = () => {
  const { isSignedIn, user } = useUser();

  if (!isSignedIn || !user) {
    return null; // Show nothing if the user is not signed in
  }

  console.log(user); // Log user object to check available properties

  return (
    <div className="flex items-center p-4  bg-inherit   select-none">
      {user.profileImageUrl ? (
        <img
          src={user.profileImageUrl}
          alt={user.fullName}
          className="w-10 h-10 hidden md:flex rounded-full mr-4"
        />
      ) : (
        <div className="w-8 h-8 rounded-full hidden md:flex bg-gray-400  items-center justify-center mr-4 text-white font-bold">
          {user.firstName.charAt(0)}
        </div>
      )}
      <div className="flex flex-col">
        <p className="md:text-lg  text-[13px] font-medium text-zinc-200 ">{user.fullName}</p>
        <p className="text-sm text-gray-300">{user.emailAddresses[0].emailAddress}</p>
      </div>
    </div>
  );
};

export default Profile;

