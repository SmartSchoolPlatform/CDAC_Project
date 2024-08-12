import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const departments = [
    'Mathematics', 'Marathi', 'English', 'History', 'Hindi',
    'Science', 'Geography', 'Sanskrit', 'Other'
];

const CreateStaff = () => {
    const [staff, setStaff] = useState({
        designation: '',
        name: '',
        department: '',
        phoneNumber: '',
        email: '',
        dateOfBirth: '',
        gender: '',
        educationDetails: '',
        profilePic: '',
        staffId:null
    });
    const navigate = useNavigate();
    const location = useLocation();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setStaff((prevStaff) => ({
            ...prevStaff,
            userId: Number(location.state.userId),
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("data sending :\n",staff);
        axios.post('http://localhost:8282/staff/create', staff)
            .then(() => navigate('/admin/staff-record'))
            .catch(error => console.error('Error creating staff:', error));
    };

    return (
        <div>
            <h2>Create Staff</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={staff.name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Designation:
                    <input
                        type="text"
                        name="designation"
                        value={staff.designation}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Department:
                    <select
                        name="department"
                        value={staff.department}
                        onChange={handleChange}
                    >
                        <option value="">Select Department</option>
                        {departments.map(dept => (
                            <option key={dept} value={dept}>
                                {dept}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Phone Number:
                    <input
                        type="text"
                        name="phoneNumber"
                        value={staff.phoneNumber}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={staff.email}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Date of Birth:
                    <input
                        type="date"
                        name="dateOfBirth"
                        value={staff.dateOfBirth}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Gender:
                    <select
                        name="gender"
                        value={staff.gender}
                        onChange={handleChange}
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </label>
                <label>
                    Education Details:
                    <input
                        type="text"
                        name="educationDetails"
                        value={staff.educationDetails}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Profile Pic URL:
                    <input
                        type="text"
                        name="profilePic"
                        value={staff.profilePic}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Create Staff</button>
            </form>
        </div>
    );
};

export default CreateStaff;
