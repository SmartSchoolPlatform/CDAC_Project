import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StudentDashboard from './StudentDashboard'; // Ensure this path is correct
import Profile from './Profile';
import Assignments from './Assignments';
import Attendance from './Attendance';
import Grades from './Grades';
import ReportCard from './ReportCard';
import Subjects from './Subjects';
import Notices from '../Notices';


const StudentRoutes = () => (
  <Routes>
    <Route path="/" element={<StudentDashboard />}>
      <Route index element={<Profile />} /> {/* Default route for /student */}
      <Route path="profile" element={<Profile />} />
      <Route path="assignments" element={<Assignments />} />
      <Route path="attendance" element={<Attendance />} />
      <Route path="grades" element={<Grades />} />
      <Route path="notices" element={<Notices />} />
      <Route path="report-card" element={<ReportCard />} />
      <Route path="subjects" element={<Subjects />} />
    </Route>
  </Routes>
);

export default StudentRoutes;
