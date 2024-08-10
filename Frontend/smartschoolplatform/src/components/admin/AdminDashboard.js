// AdminDashboard.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import LogoutButton from '../LogoutButton';


const AdminDashboard = () => (
  <div style={{ display: 'flex' }}>

<LogoutButton />
    <AdminSidebar />
    <div className="content">
      <Outlet /> {/* Renders nested routes */}
    </div>
  </div>
);

export default AdminDashboard;
