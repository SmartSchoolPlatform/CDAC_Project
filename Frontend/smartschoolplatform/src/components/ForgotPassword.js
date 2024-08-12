import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
    const [username, setUsername] = useState('');
    const [securityQuestion, setSecurityQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleGetQuestion = async () => {
        try {
            const response = await axios.get(`http://localhost:8282/users/forgot-password/${username}`);
            if (response.status === 200) {
                setSecurityQuestion(response.data.frvQuestion);
            } else {
                setMessage('User not found');
            }
        } catch (error) {
            console.error('Error fetching security question', error);
        }
    };

    const handleResetPassword = async () => {
        try {
            // Fetch current password
            const userResponse = await axios.get(`http://localhost:8282/users/${username}`);
            if (userResponse.status === 200) {
                const currentPassword = userResponse.data.password;

                // Construct new password
                const updatedPassword = `${newPassword}`;

                // Update password
                const response = await axios.post('http://localhost:8282/users/reset-password', {
                    username,
                    frvQuestion: securityQuestion,
                    answer,
                    password: updatedPassword,
                });
                if (response.status === 200) {
                    setMessage('Password updated successfully');
                } else {
                    setMessage('Failed to update password');
                }
            } else {
                setMessage('User not found');
            }
        } catch (error) {
            console.error('Error resetting password', error);
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
                    <button onClick={handleResetPassword}>Reset Password</button>
                </>
            )}
            {message && <p>{message}</p>}
        </div>
    );
};

export default ForgotPassword;
