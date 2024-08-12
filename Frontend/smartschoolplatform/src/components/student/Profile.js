import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

function Profile() {
  const [profileData, setProfileData] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:8282/students/${user.username}`);
        setProfileData(response.data);
      } catch (error) {
        console.error('Failed to fetch profile data', error);
      }
    };

    if (user && user.username) {
      fetchProfile();
    }
  }, [user]);

  if (!profileData) {
    return <div>Loading...</div>;
  }

  const { name, dateOfBirth, address, phoneNumber, email, classes } = profileData;
  const classDetails = classes || {};
  const classTeacher = classDetails.staff || {};

  return (
    <div className="container mt-4">
      <h2>Profile</h2>
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="d-flex align-items-center">
            <i className="fa-solid fa-user fa-2x me-2"></i>
            <span>{name}</span>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="d-flex align-items-center">
            <i className="fa-solid fa-calendar-day fa-2x me-2"></i>
            <span>Date of Birth: {dateOfBirth}</span>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="d-flex align-items-center">
            <i className="fa-solid fa-home fa-2x me-2"></i>
            <span>Address: {address}</span>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="d-flex align-items-center">
            <i className="fa-solid fa-envelope fa-2x me-2"></i>
            <span>Email: {email}</span>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="d-flex align-items-center">
            <i className="fa-solid fa-phone fa-2x me-2"></i>
            <span>Phone: {phoneNumber}</span>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="d-flex align-items-center">
            <i className="fa-solid fa-school fa-2x me-2"></i>
            <span>Class: {classDetails.className}</span>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="d-flex align-items-center">
            <i className="fa-solid fa-chalkboard-teacher fa-2x me-2"></i>
            <span>Class Teacher: {classTeacher.name}</span>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="d-flex align-items-center">
            <i className="fa-solid fa-phone fa-2x me-2"></i>
            <span>Teacher's Phone: {classTeacher.phoneNumber}</span>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="d-flex align-items-center">
            <i className="fa-solid fa-envelope fa-2x me-2"></i>
            <span>Teacher's Email: {classTeacher.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
