import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ role }) {
  return (
    <nav className="sidebar">
      <ul>
        {role === 'student' && (
          <>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/assignments">Assignments</Link></li>
            <li><Link to="/attendance">Attendance</Link></li>
            <li><Link to="/grades">Grades</Link></li>
            <li><Link to="/notifications">Notifications</Link></li>
            <li><Link to="/report-card">Report Card</Link></li>
            <li><Link to="/subjects">Subjects</Link></li>
          </>
        )}
        {role === 'parent' && (
          <>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/student-profile">Student Profile</Link></li>
            <li><Link to="/attendance-record">Attendance Record</Link></li>
            <li><Link to="/grade-record">Grade Record</Link></li>
            <li><Link to="/notifications">Notifications</Link></li>
            <li><Link to="/report-cards">Report Cards</Link></li>
            <li><Link to="/communication">Communication</Link></li>
            <li><Link to="/fees-record">Fees Record</Link></li>
          </>
        )}
        {role === 'teacher' && (
          <>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/classes">Classes</Link></li>
            <li><Link to="/assignments">Assignments</Link></li>
            <li><Link to="/add-grades">Add Grades</Link></li>
            <li><Link to="/notifications">Notifications</Link></li>
          </>
        )}
        {role === 'admin' && (
          <>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/student-record">Student Record</Link></li>
            <li><Link to="/staff-record">Staff Record</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Sidebar;
