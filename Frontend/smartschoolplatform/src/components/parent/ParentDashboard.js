import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ParentSidebar from './ParentSidebar';
import ParentProfile from './Profile';
import StudentProfileParent from './StudentProfile';
import AttendanceRecord from './AttendanceRecord';
import GradeRecord from './GradeRecord';
import ReportCard from './ReportCard';
import Communication from './Communication';
import FeesRecord from './FeesRecord';
import './ParentDashboard.css'; // Import CSS file
import Notices from '../Notices';

const ParentDashboard = () => (
  <div style={{ display: 'flex' }}>
    <ParentSidebar />
    <div className="content">
      <Routes>
        <Route path="/" element={<ParentProfile />} />
        <Route path="profile" element={<ParentProfile />} />
        <Route path="student-profile" element={<StudentProfileParent />} />
        <Route path="attendance-record" element={<AttendanceRecord />} />
        <Route path="grade-record" element={<GradeRecord />} />
        <Route path="notices" element={<Notices />} />
        <Route path="report-card" element={<ReportCard />} />
        <Route path="communication" element={<Communication />} />
        <Route path="fees-record" element={<FeesRecord />} />
      </Routes>
    </div>
  </div>
);

export default ParentDashboard;
