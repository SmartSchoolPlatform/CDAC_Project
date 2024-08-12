import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
    const [user, setUser] = useState({
        frvQuestion: '',
        answer: '',
        password: '',
        role: 'Student', // Default role
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("User data sending :\n",user);
        try {
            const response = await axios.post('http://localhost:8282/users/create', user);
            const createdUser = response.data;

            // Navigate to create entity based on the role
            if (user.role === 'Student') {
                navigate('/admin/create-student', { state: { userId: createdUser.userId } });
            } else if (user.role === 'Staff') {
                navigate('/admin/create-staff', { state: { userId: createdUser.userId } });
            } else if (user.role === 'Parent') {
                navigate('/admin/create-parents', { state: { userId: createdUser.userId } });
            }
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };

    return (
        <div>
            <h2>Create User</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="frvQuestion" value={user.frvQuestion} onChange={handleChange} placeholder="Security Question" />
                <input type="text" name="answer" value={user.answer} onChange={handleChange} placeholder="Answer" />
                <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password" />
                <select name="role" value={user.role} onChange={handleChange}>
                    <option value="Student">Student</option>
                    <option value="Staff">Teacher</option>
                    <option value="Parent">Parent</option>
                </select>
                <button type="submit">Create User</button>
            </form>
        </div>
    );
};

export default CreateUser;
