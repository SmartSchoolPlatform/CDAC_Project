import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Adjust path as needed

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const { setUser } = useAuth();
    const navigate = useNavigate();

    const validateForm = () => {
        const errors = {};
        const passwordPattern = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/; // At least one special character and 8 characters

        if (!username) {
            errors.username = 'Username is required';
        }

        if (!password) {
            errors.password = 'Password is required';
        } else if (!passwordPattern.test(password)) {
            errors.password = 'Password must be at least 8 characters long and include at least one special character';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0; // Return true if no errors
    };

    const handleLogin = async () => {
        if (!validateForm()) {
            return; // Stop further execution if validation fails
        }

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
            <div>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
            </div>
            <div>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            </div>
            <button onClick={handleLogin}>Login</button>
            <a href='forgot-password'>forgot</a>
        </div>
    );
};

export default Login;
