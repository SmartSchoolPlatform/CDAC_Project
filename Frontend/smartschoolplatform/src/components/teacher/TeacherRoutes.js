import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TeacherDashboard from './TeacherDashboard'; // Adjust path as needed
import Profile from './Profile';
import Classes from './Classes';
import Assignments from './Assignments';
import AddGrades from './AddGrades';
import Notices from '../Notices';

const TeacherRoutes = () => (
    
    <Routes>
        
        <Route path="/" element={<TeacherDashboard />}>
            <Route index element={<Profile />} /> {/* Default route for /teacher */}
            <Route path="profile" element={<Profile />} />
            <Route path="classes" element={<Classes />} />
            <Route path="assignments" element={<Assignments />} />
            <Route path="add-grades" element={<AddGrades />} />
            <Route path="notices" element={<Notices />} />
        </Route>
    </Routes>
);

export default TeacherRoutes;
