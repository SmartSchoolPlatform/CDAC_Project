import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const departments = [
    'Mathematics', 'Marathi', 'English', 'History', 'Hindi',
    'Science', 'Geography', 'Sanskrit', 'Other'
];

const EditStaff = () => {
    const { staffId } = useParams();
    const [staff, setStaff] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8282/staff/${staffId}`)
            .then(response => setStaff(response.data))
            .catch(error => console.error('Error fetching staff data:', error));
    }, [staffId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStaff((prevStaff) => ({
            ...prevStaff,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8282/staff/${staffId}`, staff)
            .then(() => navigate('/admin/staff-record'))
            .catch(error => console.error('Error updating staff:', error));
    };

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this staff record?')) {
            axios.delete(`http://localhost:8282/staff/${staffId}`)
                .then(() => navigate('/admin/staff-record'))
                .catch(error => console.error('Error deleting staff:', error));
        }
    };

    if (!staff) return <div>Loading...</div>;

    return (
        <div>
            <h2>Edit Staff</h2>
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
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
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
                <button type="submit">Update Staff</button>
                <button type="button" onClick={handleDelete}>Delete Staff</button>
            </form>
        </div>
    );
};

export default EditStaff;
