import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import StudentRoutes from './components/student/StudentRoutes';
import ParentRoutes from './components/parent/ParentRoutes';
import TeacherRoutes from './components/teacher/TeacherRoutes';
import AdminRoutes from './components/admin/AdminRoutes';
import { AuthProvider } from './context/AuthContext'; // Ensure the path is correct
import LogoutButton from './components/LogoutButton';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogoutButton />} />
        <Route path="/student/*" element={<StudentRoutes />} />
        <Route path="/parent/*" element={<ParentRoutes />} />
        <Route path="/teacher/*" element={<TeacherRoutes />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
