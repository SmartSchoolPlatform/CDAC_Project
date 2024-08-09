import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from './AdminDashboard'; // Ensure the path is correct
import AdminProfile from './Profile'; // Ensure the path is correct
import StudentRecord from './StudentRecord'; // Ensure the path is correct
import StaffRecord from './StaffRecord'; // Ensure the path is correct

const AdminRoutes = () => (
  <Routes>
    <Route path="/" element={<AdminDashboard />}>
      <Route index element={<AdminProfile />} />
      <Route path="profile" element={<AdminProfile />} />
      <Route path="student-record" element={<StudentRecord />} />
      <Route path="staff-record" element={<StaffRecord />} />
    </Route>
  </Routes>
);


export default AdminRoutes;
