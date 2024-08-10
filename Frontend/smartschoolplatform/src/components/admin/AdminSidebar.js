import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li><Link to="profile">Profile</Link></li>
        <li><Link to="student-record">Student Record</Link></li>
        <li><Link to="create-student">Create Student</Link></li>
        <li><Link to="staff-record">Staff Record</Link></li>
        <li><Link to="create-staff">Create Staff</Link></li>
        <li><Link to="assign-subjects">Assign Subjects</Link></li>
      </ul>
    </nav>
  );
};

export default AdminSidebar;
