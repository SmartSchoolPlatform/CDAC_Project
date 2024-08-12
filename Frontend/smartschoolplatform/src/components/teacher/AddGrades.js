import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

const AddGrades = () => {
    const [classes, setClasses] = useState([]);
    const [selectedClass, setSelectedClass] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');
    const [exams] = useState(['mid-sem1', 'mid-sem2', 'sem1', 'sem2']);
    const [selectedExam, setSelectedExam] = useState('');
    const [students, setStudents] = useState([]);
    const [grades, setGrades] = useState({});
    const [examDate, setExamDate] = useState('');
    const [loading, setLoading] = useState(false);
    const { user } = useAuth();

    // Fetch classes and subjects based on the user's role
    const fetchClassesAndSubjects = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`http://localhost:8282/subjects/classes/staff/${user.username}`);
            console.log("Classes Response Data:\n", JSON.stringify(response.data, null, 2));
            const classData = response.data.map(item => ({
                classId: item.classes.classId,
                name: item.classes.className,
                subjectId: item.subjectId
            }));
            setClasses(classData);
            console.log("\n\n\n=====\n\n\n", classData);
        } catch (error) {
            console.error('Error fetching classes and subjects:', error);
        } finally {
            setLoading(false);
        }
    };

    // Fetch students based on the selected class
    const fetchStudents = async () => {
        if (!selectedClass || !selectedExam) return;

        try {
            setLoading(true);
            const response = await axios.get(`http://localhost:8282/students/class/${selectedClass}`);
            console.log("Students Response Data:\n", JSON.stringify(response.data, null, 2));
            setStudents(response.data);
            const initialGrades = {};
            response.data.forEach(student => {
                initialGrades[student.studentId] = '';
            });
            setGrades(initialGrades);
        } catch (error) {
            console.error('Error fetching students:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchClassesAndSubjects();
    }, [user.username]);

    useEffect(() => {
        if (selectedClass && selectedExam) {
            fetchStudents();
        }
    }, [selectedClass, selectedExam]);

    const handleClassChange = (e) => {
        const selectedClassId = e.target.value;
        const selectedClassObj = classes.find(cls => cls.classId === Number(selectedClassId));
        setSelectedClass(selectedClassId);
        setSelectedSubject(selectedClassObj?.subjectId || '');
    };

    const handleExamChange = (e) => {
        setSelectedExam(e.target.value);
    };

    const handleExamDateChange = (e) => {
        setExamDate(e.target.value);
    };

    const handleGradeChange = (studentId, marks) => {
        setGrades(prevGrades => ({
            ...prevGrades,
            [Number(studentId)]: marks
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const gradesData = students.map(student => ({
            studentId: student.studentId,
            examDate: examDate,
            examName: selectedExam,
            marks: parseFloat(grades[student.studentId]) || 0,
            classId: Number(selectedClass),
            subjectId: selectedSubject
        }));

        console.log('Grades to submit:', gradesData);

        try {
            for (const grade of gradesData) {
                await axios.post('http://localhost:8282/marks/create', grade);
            }
            alert('Grades submitted successfully!');  // Show success alert
            setGrades({}); // Optionally reset grades
            setSelectedClass('');
            setSelectedExam('');
            setExamDate('');
        } catch (error) {
            console.error('Error submitting grades:', error);
            alert('Error submitting grades. Please try again.');  // Show error alert
        }
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

            <div>
                <label>Exam Date:</label>
                <input
                    type="date"
                    value={examDate}
                    onChange={handleExamDateChange}
                />
            </div>

            {students.length > 0 && (
                <form onSubmit={handleSubmit}>
                    {students.map(student => (
                        <div key={student.studentId}>
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
