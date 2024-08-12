import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const CreateStudent = () => {
    const [student, setStudent] = useState({
        name: '',
        dateOfBirth: '',
        classId: 0,
        address: '',
        admissionDate: '',
        email: '',
        gender: '',
        phoneNumber: '',
        profilePic: '',
        userId: null // Initialize as null
    });
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.userId) {
            // Ensure userId is set as a number
            setStudent(prevStudent => ({
                ...prevStudent,
                userId: Number(location.state.userId)
            }));
        }
    }, [location.state]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent(prevStudent => ({
            ...prevStudent,
            [name]: name === 'classId' ? Number(value) : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("data sending :\n",student);
        try {
            await axios.post('http://localhost:8282/students/create', student);
            alert(`Student record created successfully. Student ID: ${student.userId}`);
            navigate('/admin/student-record');
        } catch (error) {
            console.error('Error creating student record:', error);
        }
    };

    return (
        <div>
            <h2>Create Student</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={student.name} onChange={handleChange} placeholder="Name" />
                <input type="date" name="dateOfBirth" value={student.dateOfBirth} onChange={handleChange} placeholder="Date of Birth" />
                <input type="number" name="classId" value={student.classId} onChange={handleChange} placeholder="Class ID" />
                <input type="text" name="address" value={student.address} onChange={handleChange} placeholder="Address" />
                <input type="date" name="admissionDate" value={student.admissionDate} onChange={handleChange} placeholder="Admission Date" />
                <input type="email" name="email" value={student.email} onChange={handleChange} placeholder="Email" />
                <select name="gender" value={student.gender} onChange={handleChange}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="OTHER">Other</option>
                </select>
                <input type="text" name="phoneNumber" value={student.phoneNumber} onChange={handleChange} placeholder="Phone Number" />
                <input type="text" name="profilePic" value={student.profilePic} onChange={handleChange} placeholder="Profile Pic URL" />
                <input type="hidden" name="userId" value={student.studentId || ''} />
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateStudent;
