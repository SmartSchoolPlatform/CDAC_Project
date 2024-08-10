// src/components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import LogoutButton from './LogoutButton';

const Layout = ({ Sidebar }) => (
  <div>
    <div className="navbar">
      <div className="navbar-brand">Smart School Platform</div>
      <div className="navbar-right">
        <LogoutButton />
      </div>
    </div>
    <div style={{ display: 'flex' }}>
      {Sidebar && <Sidebar />} {/* Conditionally render the sidebar */}
      <div className="content">
        <Outlet /> {/* Renders nested routes */}
      </div>
    </div>
  </div>
);

export default Layout;
