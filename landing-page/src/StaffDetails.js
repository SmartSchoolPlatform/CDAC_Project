// src/components/StaffDetails.js

import React, { useState, useEffect } from 'react';

const StaffDetails = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8282/subjects/classes/staff/30005')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data!</p>;

  return (
    <div>
      <h1>Staff Details</h1>
      {data.map((item, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h2>Subject: {item.subjectName}</h2>
          <h3>Class: {item.classes.className}</h3>
          <div>
            <h4>Staff Information:</h4>
            <p>Name: {item.staff.name}</p>
            <p>Designation: {item.staff.designation}</p>
            <p>Department: {item.staff.department}</p>
            <p>Phone: {item.staff.phoneNumber}</p>
            <p>Email: {item.staff.email}</p>
            <p>Date of Birth: {item.staff.dateOfBirth}</p>
            <p>Gender: {item.staff.gender}</p>
            <p>Education: {item.staff.educationDetails}</p>
            <img src={`path/to/images/${item.staff.profilePic}`} alt={`${item.staff.name}'s profile`} width="100" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default StaffDetails;
