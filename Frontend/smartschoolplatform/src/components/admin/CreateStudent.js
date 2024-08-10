import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateStaff = () => {
    const [staff, setStaff] = useState({
        name: '',
        dateOfBirth: '',
        department: '',
        designation: '',
        educationDetails: '',
        email: '',
        gender: '',
        phoneNumber: '',
        profilePic: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStaff(prevStaff => ({ ...prevStaff, [name]: value }));
    };

    const handleSubmit = (e) => {
        console.log(staff);
        e.preventDefault();
        axios.post('http://localhost:8282/staff/create', staff)
            .then(response => {
                alert('Staff record created successfully.');
                navigate('/admin/staff-record');
            })
            .catch(error => console.error('Error creating staff record:', error));
    };

    return (
        <div>
            <h2>Create Staff</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={staff.name} onChange={handleChange} placeholder="Name" />
                <input type="date" name="dateOfBirth" value={staff.dateOfBirth} onChange={handleChange} placeholder="Date of Birth" />
                <input type="text" name="department" value={staff.department} onChange={handleChange} placeholder="Department" />
                <input type="text" name="designation" value={staff.designation} onChange={handleChange} placeholder="Designation" />
                <input type="text" name="educationDetails" value={staff.educationDetails} onChange={handleChange} placeholder="Education Details" />
                <input type="email" name="email" value={staff.email} onChange={handleChange} placeholder="Email" />
                <input type="text" name="gender" value={staff.gender} onChange={handleChange} placeholder="Gender" />
                <input type="text" name="phoneNumber" value={staff.phoneNumber} onChange={handleChange} placeholder="Phone Number" />
                <input type="text" name="profilePic" value={staff.profilePic} onChange={handleChange} placeholder="Profile Pic URL" />
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateStaff;
