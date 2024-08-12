import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout';
import AdminSidebar from './AdminSidebar';
import AdminProfile from './Profile';
import StudentRecord from './StudentRecord';
import CreateStudent from './CreateStudent';
import StaffRecord from './StaffRecord';
import CreateStaff from './CreateStaff';
import EditSubject from './EditSubject';
import EditStudent from './EditStudent';
import EditStaff from './EditStaff';
import AdminUpgradeStudents from './AdminUpgradeStudents';
import CreateParent from './CreateParent';
import CreateUser from './CreateUser';

const AdminRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout Sidebar={AdminSidebar} />}>
      <Route index element={<AdminProfile />} />
      <Route path="profile" element={<AdminProfile />} />
      <Route path="student-record" element={<StudentRecord />} />
      <Route path="create-student" element={<CreateStudent />} />
      <Route path="edit-student/:studentId" element={<EditStudent />} />
      <Route path="staff-record" element={<StaffRecord />} />
      <Route path="create-staff" element={<CreateStaff />} />
      <Route path="edit-staff/:staffId" element={<EditStaff />} />
      <Route path="assign-subjects" element={<EditSubject />} />
      <Route path="upgrade-students" element={<AdminUpgradeStudents />} />
      <Route path="create-parents" element={<CreateParent />} />
      <Route path="create-user" element={<CreateUser />} />
    </Route>
  </Routes>
);

export default AdminRoutes;