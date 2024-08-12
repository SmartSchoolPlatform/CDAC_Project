import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

const Grades = () => {
    const [classes, setClasses] = useState([]);
    const [selectedClass, setSelectedClass] = useState('');
    const [selectedExam, setSelectedExam] = useState('');
    const [grades, setGrades] = useState([]);
    const [loading, setLoading] = useState(false);
    const { user } = useAuth();
    const studentId = user.username;  // Assuming user.username is the studentId

    // Fetch grades based on studentId
    const fetchGrades = async () => {
        if (!studentId) return;
        try {
            setLoading(true);
            const response = await axios.get(`http://localhost:8282/marks/student/${studentId}`);
            const gradesData = response.data;

            // Extract unique class options from grades data
            const classOptions = Array.from(
                new Set(gradesData.map(item => item.classes.className))
            ).map(className => {
                return {
                    classId: gradesData.find(item => item.classes.className === className).classes.classId,
                    className
                };
            });

            setClasses(classOptions);
            setGrades(gradesData);
        } catch (error) {
            console.error('Error fetching grades:', error);
        } finally {
            setLoading(false);
        }
    };

    // Handle class selection change
    const handleClassChange = (e) => {
        setSelectedClass(e.target.value);
    };

    // Handle exam selection change
    const handleExamChange = (e) => {
        setSelectedExam(e.target.value);
    };

    useEffect(() => {
        fetchGrades();
    }, [studentId]);

    // Apply filters
    const filteredGrades = grades.filter(grade => 
        (selectedClass ? grade.classes.classId === parseInt(selectedClass) : true) &&
        (selectedExam ? grade.examName === selectedExam : true)
    );

    return (
        <div className="container mt-4">
            <h2>Grades</h2>
            {loading && <p>Loading...</p>}
            
            <div className="form-group">
                <label>Select Class:</label>
                <select
                    value={selectedClass}
                    onChange={handleClassChange}
                >
                    <option value="">Select Class</option>
                    {classes.map(cls => (
                        <option key={cls.classId} value={cls.classId}>
                            {cls.className}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label>Select Exam:</label>
                <select
                    value={selectedExam}
                    onChange={handleExamChange}
                >
                    <option value="">Select Exam</option>
                    <option value="mid-sem1">mid-sem1</option>
                    <option value="mid-sem2">mid-sem2</option>
                    <option value="sem1">sem1</option>
                    <option value="sem2">sem2</option>
                </select>
            </div>

            <div className="grades-list">
                {selectedClass && selectedExam ? (
                    filteredGrades.length > 0 ? (
                        filteredGrades.map(grade => (
                            <div key={grade.markId} className="grade-item">
                                <div className="grade-subject">
                                    <h5>Exam Name: {grade.examName}</h5>
                                    <p><strong>Subject:</strong> {grade.subjects.subjectName}</p>
                                    <p><strong>Marks:</strong> {grade.marks}</p>
                                    <p><strong>Exam Date:</strong> {grade.examDate}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No grades available for the selected class and exam.</p>
                    )
                ) : (
                    <p>Please select both class and exam to view grades.</p>
                )}
            </div>
        </div>
    );
};

export default Grades;
