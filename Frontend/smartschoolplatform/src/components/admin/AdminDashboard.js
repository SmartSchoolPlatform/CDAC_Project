import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from './AdminDashboard'; // Ensure the path is correct
import AdminProfile from './Profile'; // Ensure the path is correct
import StudentRecord from './StudentRecord'; // Ensure the path is correct
import StaffRecord from './StaffRecord'; // Ensure the path is correct
import AdminSidebar from './AdminSidebar';

const AdminRoutes = () => (
  <div style={{ display: 'flex' }}>
  <AdminSidebar />
  <div className="content">
  <Routes>
    <Route path="*" element={<AdminDashboard />}>
      <Route path="/" element={<AdminProfile />} />
      <Route path="profile" element={<AdminProfile />} />
      <Route path="student-record" element={<StudentRecord />} />
      <Route path="staff-record" element={<StaffRecord />} />
    </Route>
  </Routes>
  </div>
  </div>
);

export default AdminRoutes;
