import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminProfile from './Profile';
import StudentRecord from './StudentRecord';
import StaffRecord from './StaffRecord';

const AdminRoutes = () => (
  <Routes>
    <Route path="profile" element={<AdminProfile />} />
    <Route path="student-record" element={<StudentRecord />} />
    <Route path="staff-record" element={<StaffRecord />} />
  </Routes>
);

export default AdminRoutes;
