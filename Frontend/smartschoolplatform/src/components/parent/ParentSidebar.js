import React from 'react';
import { Link } from 'react-router-dom';

function ParentSidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <li><Link to="profile">Profile</Link></li>
        <li><Link to="student-profile">Student Profile</Link></li>
        <li><Link to="attendance-record">Attendance Record</Link></li>
        <li><Link to="grade-record">Grade Record</Link></li>
        <li><Link to="notices">Notices</Link></li>
        <li><Link to="report-card">Report Card</Link></li>
        <li><Link to="communication">Communication</Link></li>
        <li><Link to="fees-record">Fees Record</Link></li>
      </ul>
    </nav>
  );
}

export default ParentSidebar;
