import React from 'react';
import { Link } from 'react-router-dom';

function StudentSidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <li><Link to="profile">Profile</Link></li>
        <li><Link to="assignments">Assignments</Link></li>
        <li><Link to="attendance">Attendance</Link></li>
        <li><Link to="grades">Grades</Link></li>
        <li><Link to="notices">Notices</Link></li>
        <li><Link to="report-card">Report Card</Link></li>
      </ul>
    </nav>
  );
}

export default StudentSidebar;
