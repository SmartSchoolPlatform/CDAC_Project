import React from 'react';
import { Link } from 'react-router-dom';

function TeacherSidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <li><Link to="profile">Profile</Link></li>
        <li><Link to="classes">Classes</Link></li>
        <li><Link to="assignments">Assignments</Link></li>
        <li><Link to="add-grades">Add Grades</Link></li>
        <li><Link to="notices">Notices</Link></li>
        <li><Link to="communication">Communication</Link></li>
        <li><Link to="attendance">Add Attendance</Link></li>
        <li><Link to="report-card">Add Report Card</Link></li> {/* New link */}
      </ul>
    </nav>
  );
}

export default TeacherSidebar;
