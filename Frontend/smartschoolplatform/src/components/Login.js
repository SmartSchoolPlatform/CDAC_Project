import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Adjust path as needed

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8282/users/login', { username, password });
            const user = response.data;
            setUser(user); // Save user details and trigger data fetching
            console.log(user);
            if (user.role === 'Admin') {
                navigate('/admin');
            } else if (user.role === 'Parent') {
                navigate('/parent');
            } else if (user.role === 'Student') {
                console.log("\n=====\ninside student\n======")
                navigate('/student');
            } else if (user.role === 'Staff') {
                navigate('/teacher');
            }
        } catch (error) {
            console.error('Login failed', error);
            // Handle login failure
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
