import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Profile from './Profile';
import Assignments from './Assignments';
import Attendance from './Attendance';
import Grades from './Grades';
import ReportCard from './ReportCard';
import Notices from '../Notices';
import StudentSidebar from './StudentSidebar';
import Layout from '../Layout';

const StudentRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout Sidebar={StudentSidebar} />}>
      <Route index element={<Profile />} /> {/* Default route for / */}
      <Route path="profile" element={<Profile />} />
      <Route path="assignments" element={<Assignments />} />
      <Route path="attendance" element={<Attendance />} />
      <Route path="grades" element={<Grades />} />
      <Route path="notices" element={<Notices />} />
      <Route path="report-card" element={<ReportCard />} />
    </Route>
  </Routes>
);

export default StudentRoutes;
