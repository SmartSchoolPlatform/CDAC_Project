import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ParentDashboard from './ParentDashboard'; // Adjust path as needed
import ParentProfile from './Profile';
import StudentProfileParent from './StudentProfile';
import AttendanceRecord from './AttendanceRecord';
import GradeRecord from './GradeRecord';
import ReportCard from './ReportCard';
import Communication from './Communication';
import FeesRecord from './FeesRecord';
import Notices from '../Notices';

const ParentRoutes = () => (
  <Routes>
    <Route path="/" element={<ParentDashboard />}>
      <Route index element={<ParentProfile />} /> {/* Default route for /parent */}
      <Route path="profile" element={<ParentProfile />} />
      <Route path="student-profile" element={<StudentProfileParent />} />
      <Route path="attendance-record" element={<AttendanceRecord />} />
      <Route path="grade-record" element={<GradeRecord />} />
      <Route path="notices" element={<Notices />} />
      <Route path="report-card" element={<ReportCard />} />
      <Route path="communication" element={<Communication />} />
      <Route path="fees-record" element={<FeesRecord />} />
    </Route>
  </Routes>
);

export default ParentRoutes;
