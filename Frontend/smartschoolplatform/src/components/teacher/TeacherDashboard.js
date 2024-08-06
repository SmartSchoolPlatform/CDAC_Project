import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import Profile from './Profile';
import Classes from './Classes';
import Assignments from './Assignments';
import AddGrades from './AddGrades';
import './TeacherDashboard.css'; // Import CSS file
import Notices from '../Notices';

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
      </Routes>
    </div>
  </div>
);

export default TeacherDashboard;
