import React from 'react';
import { Link } from 'react-router-dom';

function AdminSidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/student-record">Student Record</Link></li>
        <li><Link to="/staff-record">Staff Record</Link></li>
      </ul>
    </nav>
  );
}

export default AdminSidebar;
