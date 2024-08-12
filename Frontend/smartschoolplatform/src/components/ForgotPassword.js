import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
    const [username, setUsername] = useState('');
    const [securityQuestion, setSecurityQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [formError, setFormError] = useState('');

    const handleGetQuestion = async () => {
        try {
            const response = await axios.get(`http://localhost:8282/users/forgot-password/${username}`);
            if (response.status === 200) {
                setSecurityQuestion(response.data.frvQuestion);
                setFormError(''); // Clear any previous errors
            } else {
                setMessage('User not found');
            }
        } catch (error) {
            console.error('Error fetching security question', error);
        }
    };

    const validatePassword = (password) => {
        // Check if password length is at least 8 characters and contains at least one special character
        const regex = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        return regex.test(password);
    };

    const handleResetPassword = async () => {
        if (!validatePassword(newPassword)) {
            setPasswordError('Password must be at least 8 characters long and contain at least one special character.');
            return;
        }
        setPasswordError('');

        try {
            const response = await axios.post('http://localhost:8282/users/reset-password', {
                username,
                frvQuestion: securityQuestion,
                answer,
                password: newPassword,
            });
            if (response.status === 200) {
                setMessage('Password updated successfully');
                setFormError('');
            } else {
                setMessage('');
                setFormError('Invalid security question or answer');
            }
        } catch (error) {
            console.error('Error resetting password', error);
            setFormError('An error occurred while resetting the password');
        }
    };

    return (
        <div>
            <h2>Forgot Password</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleGetQuestion}>Get Security Question</button>
            {securityQuestion && (
                <>
                    <p>Security Question: {securityQuestion}</p>
                    <input
                        type="text"
                        placeholder="Answer"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
                    {formError && <p style={{ color: 'red' }}>{formError}</p>}
                    <button onClick={handleResetPassword}>Reset Password</button>
                </>
            )}
            {message && <p>{message}</p>}
        </div>
    );
};

export default ForgotPassword;
