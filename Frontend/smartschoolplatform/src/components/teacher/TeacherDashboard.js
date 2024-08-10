import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import Profile from './Profile';
import Classes from './Classes';
import Assignments from './Assignments';
import AddGrades from './AddGrades';
import Notices from '../Notices';
import TeacherCommunication from './TeacherCommunication'; // Import new component
import './TeacherDashboard.css'; // Import CSS file
import AddAttendanceRecord from './AddAttendanceRecord';
const TeacherDashboard = () => (
  <div style={{ display: 'flex' }}>
    <TeacherSidebar />

    <div className="content">
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="profile" element={<Profile />} />
        <Route path="classes" element={<Classes />} />
        <Route path="assignments" element={<Assignments />} />
        <Route path="add-grades" element={<AddGrades />} />
        <Route path="notices" element={<Notices />} />
        <Route path="communication" element={<TeacherCommunication />} /> {/* New route */}
        <Route path="attendance" element={<AddAttendanceRecord />} />
      </Routes>
    </div>
  </div>
);

export default TeacherDashboard;
