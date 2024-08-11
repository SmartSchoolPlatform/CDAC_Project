import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TeacherDashboard from './TeacherDashboard'; // Ensure this path is correct
import Profile from './Profile';
import Classes from './Classes';
import Assignments from './Assignments';
import AddGrades from './AddGrades';
import Notices from '../Notices';
import TeacherCommunication from './TeacherCommunication';
import TeacherSidebar from './TeacherSidebar';
import Layout from '../Layout';
import AddAttendanceRecord from './AddAttendanceRecord';
import AddReportCard from './AddReportCard';

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
      <Route path="report-card" element={<AddReportCard />} />
    </Route>
  </Routes>
);

export default TeacherRoutes;
