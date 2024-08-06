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
        <li><Link to="/notices">Notices</Link></li>
      </ul>
    </nav>
  );
}

export default TeacherSidebar;
