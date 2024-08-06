import React from 'react';

function ReportCard() {
  return (
    <div className="container mt-4">
      <h2>Report Card</h2>
      <div className="card p-3">
        <h4>Student Name: Jane Smith</h4>
        <p>Class: 10th Grade</p>
        <p>Subject: Math - A</p>
        <p>Subject: Science - B+</p>
        {/* Add more report card details as needed */}
      </div>
    </div>
  );
}

export default ReportCard;
