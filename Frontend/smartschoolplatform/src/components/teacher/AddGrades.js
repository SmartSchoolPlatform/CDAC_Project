import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

const AddGrades = () => {
    const [classes, setClasses] = useState([]);
    const [selectedClass, setSelectedClass] = useState('');
    const [exams] = useState(['mid-sem1', 'mid-sem2', 'sem1', 'sem2']);
    const [selectedExam, setSelectedExam] = useState('');
    const [students, setStudents] = useState([]);
    const [grades, setGrades] = useState({});
    const [loading, setLoading] = useState(false);
    const { user } = useAuth();

    // Fetch classes based on the user's role
    const fetchClasses = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`http://localhost:8282/subjects/classes/staff/${user.username}`);
            console.log("Classes Response Data:\n", JSON.stringify(response.data, null, 2));
            // Extract class data
            const classData = response.data.map(item => ({
                classId: item.classes.classId,
                name: item.classes.className
            }));
            setClasses(classData);
        } catch (error) {
            console.error('Error fetching classes:', error);
        } finally {
            setLoading(false);
        }
    };

    // Fetch students based on the selected class and exam
    const fetchStudents = async () => {
        if (!selectedClass || !selectedExam) return;

        try {
            setLoading(true);
            const response = await axios.get(`http://localhost:8282/students/class/${selectedClass}`);
            console.log("Students Response Data:\n", JSON.stringify(response.data, null, 2));
            setStudents(response.data);
            // Initialize grades object for each student
            const initialGrades = {};
            response.data.forEach(student => {
                initialGrades[student.student_id] = ''; // Initialize grades with an empty string
            });
            setGrades(initialGrades);
        } catch (error) {
            console.error('Error fetching students:', error);
        } finally {
            setLoading(false);
        }
    };

    // Fetch classes when the component mounts or user role changes
    useEffect(() => {
        fetchClasses();
    }, [user.username]);

    // Fetch students when either class or exam changes
    useEffect(() => {
        if (selectedClass && selectedExam) {
            fetchStudents();
        }
    }, [selectedClass, selectedExam]);

    // Handle changes in selected class
    const handleClassChange = (e) => {
        setSelectedClass(e.target.value);
    };

    // Handle changes in selected exam
    const handleExamChange = (e) => {
        setSelectedExam(e.target.value);
    };

    // Handle changes in student grades
    const handleGradeChange = (studentId, marks) => {
        setGrades(prevGrades => ({
            ...prevGrades,
            [studentId]: marks
        }));
    };

    // Handle form submission to submit grades
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        const gradesData = Object.entries(grades).map(([studentId, marks]) => ({
            student_id: studentId,
            exam_id: selectedExam,
            marks: marks
        }));
        console.log('Grades to submit:', gradesData);

        // Submit grades to the server
        axios.post('http://localhost:8282/submit/grades', gradesData)
            .then(response => console.log('Grades submitted'))
            .catch(error => console.error('Error submitting grades:', error));
    };

    return (
        <div>
            <h1>Add Grades</h1>
            {loading && <p>Loading...</p>}
            <div>
                <label>Select Class:</label>
                <select value={selectedClass} onChange={handleClassChange}>
                    <option value="">Select Class</option>
                    {classes.map(cls => (
                        <option key={cls.classId} value={cls.classId}>{cls.name}</option>
                    ))}
                </select>
            </div>

            <div>
                <label>Select Exam:</label>
                <select value={selectedExam} onChange={handleExamChange}>
                    <option value="">Select Exam</option>
                    {exams.map(exam => (
                        <option key={exam} value={exam}>{exam}</option>
                    ))}
                </select>
            </div>

            <button onClick={() => fetchStudents()}>Search</button>

            {students.length > 0 && (
                <form onSubmit={handleSubmit}>
                    {students.map(student => (
                        <div key={student.student_id}>
                            <label>
                                Student ID: {student.studentId}
                            </label>
                            <label>
                                Name: {student.name}
                            </label>

                            <input
                                type="number"
                                placeholder="Enter marks"
                                value={grades[student.studentId] || ''}
                                onChange={(e) => handleGradeChange(student.studentId, e.target.value)}
                            />
                        </div>
                    ))}
                    <button type="submit">Submit Grades</button>
                </form>
            )}
        </div>
    );
};

export default AddGrades;
