import React from 'react';

function Profile() {
  // Example profile data
  const profileData = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Student", // or Teacher, Parent, Admin
  };

  return (
    <div className="container mt-4">
      <h2>Profile</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{profileData.name}</h5>
          <p className="card-text">Email: {profileData.email}</p>
          <p className="card-text">Role: {profileData.role}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
