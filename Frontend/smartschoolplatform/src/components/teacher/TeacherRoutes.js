// src/components/teacher/TeacherRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout'; // Ensure path is correct
import TeacherSidebar from './TeacherSidebar';
import Profile from './Profile';
import Classes from './Classes';
import Assignments from './Assignments';
import AddGrades from './AddGrades';
import Notices from '../Notices';
import TeacherCommunication from './TeacherCommunication';
import AddAttendanceRecord from './AddAttendanceRecord';

const TeacherRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout Sidebar={TeacherSidebar} />}>
      <Route index element={<Profile />} /> {/* Default route for /teacher */}
      <Route path="profile" element={<Profile />} />
      <Route path="classes" element={<Classes />} />
      <Route path="assignments" element={<Assignments />} />
      <Route path="add-grades" element={<AddGrades />} />
      <Route path="notices" element={<Notices />} />
      <Route path="communication" element={<TeacherCommunication />} />
      <Route path="attendance" element={<AddAttendanceRecord />} />
    </Route>
  </Routes>
);

export default TeacherRoutes;
