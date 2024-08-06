import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext'; // Adjust path as needed

const Classes = () => {
    const { user } = useAuth(); // Use the auth context to get the username or staffId
    const [classesData, setClassesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedClass, setSelectedClass] = useState(null);

    useEffect(() => {
        const fetchClasses = async () => {
            if (!user || !user.username) {
                setError('User not logged in');
                setLoading(false);
                return;
            }
            try {
                const response = await axios.get(`http://localhost:8282/subjects/classes/staff/${user.username}`);
                console.log("API Response:", response.data); // Log the API response
                setClassesData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching classes data', error);
                setError('Failed to fetch classes data');
                setLoading(false);
            }
        };

        fetchClasses();
    }, [user]); // Depend on `user` to fetch data when user changes

    const handleClassClick = (classId) => {
        const selected = classesData.find(item => item.classes.classId === classId);
        setSelectedClass(selected);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h2>Classes</h2>
            <div className="class-list">
                {classesData.length === 0 ? (
                    <p>No classes available.</p>
                ) : (
                    <ul>
                        {classesData.map(item => (
                            <li key={item.classes.classId} onClick={() => handleClassClick(item.classes.classId)}>
                                <h4>{item.classes.className}</h4>
                                <p>Subject: {item.subjectName}</p>
                                <p>Teacher: {item.staff.name}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            {selectedClass && (
                <div className="class-details">
                    <h3>Class Details</h3>
                    <p><strong>Class Name:</strong> {selectedClass.classes.className}</p>
                    <p><strong>Subject:</strong> {selectedClass.subjectName}</p>
                    <p><strong>Teacher:</strong> {selectedClass.staff.name}</p>
                    <p><strong>Email:</strong> {selectedClass.staff.email}</p>
                    <p><strong>Phone:</strong> {selectedClass.staff.phoneNumber}</p>
                    {/* Add more details as needed */}
                </div>
            )}
        </div>
    );
};

export default Classes;
