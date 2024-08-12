import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

const StudentProfile = () => {
    const [studentData, setStudentData] = useState(null);
    const { user } = useAuth();

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const response = await axios.get(`http://localhost:8282/parents/${user.username}`);
                setStudentData(response.data.student);
            } catch (error) {
                console.error('Error fetching student data', error);
            }
        };

        fetchStudentData();
    }, [user]);

    if (!studentData) {
        return <div>Loading...</div>;
    }

    const { name, dateOfBirth, address, phoneNumber, email, gender, admissionDate, profilePic, classes } = studentData;

    return (
        <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '800px', margin: '20px auto' }}>
            <h2>Student Profile</h2>
            <div style={{ marginBottom: '20px' }}>
                <h3>Student Details</h3>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Date of Birth:</strong> {dateOfBirth}</p>
                <p><strong>Address:</strong> {address}</p>
                <p><strong>Phone Number:</strong> {phoneNumber}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Admission Date:</strong> {admissionDate}</p>
                {profilePic && (
                    <img src={`path_to_images/${profilePic}`} alt="Student Profile" style={{ maxWidth: '150px', borderRadius: '50%' }} />
                )}
            </div>
            <div style={{ marginBottom: '20px' }}>
                <h3>Class Details</h3>
                {classes && (
                    <>
                        <p><strong>Class Name:</strong> {classes.className}</p>
                        <div>
                            <h4>Class Teacher</h4>
                            {classes.staff && (
                                <>
                                    <p><strong>Name:</strong> {classes.staff.name}</p>
                                    <p><strong>Designation:</strong> {classes.staff.designation}</p>
                                    <p><strong>Phone Number:</strong> {classes.staff.phoneNumber}</p>
                                    <p><strong>Email:</strong> {classes.staff.email}</p>
                                </>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default StudentProfile;
