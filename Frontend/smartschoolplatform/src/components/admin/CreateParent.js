import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const CreateParent = () => {
    const [parent, setParent] = useState({
        address: '',
        email: '',
        name: '',
        phoneNumber: '',
        studentId: 0, // Optional: Use if linking to a student
        userId: null,  // Initialized as null
    });
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.userId) {
            // Ensure userId is set as a number
            setParent(prevParent => ({
                ...prevParent,
                userId: Number(location.state.userId)
            }));
        }
    }, [location.state]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Convert studentId to number if the name is 'studentId'
        const updatedValue = name === 'studentId' ? Number(value) : value;
        setParent(prevParent => ({
            ...prevParent,
            [name]: updatedValue
        }));
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("data sending :\n",parent);
        try {
            await axios.post('http://localhost:8282/parents', parent);
            alert('Parent record created successfully.');
            navigate('/admin/parent-record'); // Redirect to another page if needed
        } catch (error) {
            console.error('Error creating parent record:', error);
        }
    };

    return (
        <div>
            <h2>Create Parent</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="address" value={parent.address} onChange={handleChange} placeholder="Address" />
                <input type="email" name="email" value={parent.email} onChange={handleChange} placeholder="Email" />
                <input type="text" name="name" value={parent.name} onChange={handleChange} placeholder="Name" />
                <input
                        type="number"
                        name="phoneNumber"
                        value={parent.phoneNumber}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        maxLength="12" // Limit input to 14 characters
                        pattern="\d*" // Ensure only numeric values are allowed
                />                
                <input type="number" name="studentId" value={parent.studentId} onChange={handleChange} placeholder="Student ID" min="1" step="1" />                
                <input type="hidden" name="userId" value={parent.userId || ''} />
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateParent;
