// src/components/LogoutButton.js

import React from 'react';
import { useAuth } from '../context/AuthContext'; // Adjust path as needed
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(); // This will clear user data and redirect to login
        navigate('/login'); // Ensure that the user is redirected to the login page
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default LogoutButton;
