import React from 'react';
import { useAuth } from '../auth/AuthContext';

const UserProfile = () => {
  const { isLoggedIn } = useAuth();

  // useEffect(() => {
  //   checkAuth();
  // }, [checkAuth]);

  if (!isLoggedIn) {
    return <p>You must be logged in to view your profile.</p>;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { user } = useAuth();

  console.log("user data: ", user);
  
  if (!user) {
    return <p>Loading user data...</p>;
  }

  if (!user.profile) {
    return <p>User profile data is not available.</p>;
  }

  return (
    <div className="container text-center">
      <h2>Your Profile</h2>
      {/* <p>Name: {user.profile.name}</p> */}
      <p>Name: {user.profile.email}</p>
    </div>
  );
}

export default UserProfile;
