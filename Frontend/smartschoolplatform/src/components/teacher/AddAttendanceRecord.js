import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

function AddAttendanceRecord() {
    const [classes, setClasses] = useState([]);
    const [students, setStudents] = useState([]);
    const [totalClassesTakes, setTotalClassesTakes] = useState('');
    const [attendanceRecords, setAttendanceRecords] = useState([]);
    const [error, setError] = useState(null);
    const { user } = useAuth();

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const response = await axios.get('http://localhost:8282/classes');
                const teacherClasses = response.data.filter(cls => cls.staff.staffId == user.username);
                setClasses(teacherClasses);
                //console.log("data :\n\n"+response+"\n\n"+teacherClasses);
                //console.log("Profile Response Data:\n", JSON.stringify(response, null, 2),"second data \n",JSON.stringify(teacherClasses, null, 2));
                if (teacherClasses.length > 0) {
                    const classId = teacherClasses[0].classId;
                    console.log("\n\nclasId :"+classId);
                    const studentsResponse = await axios.get(`http://localhost:8282/students/class/${classId}`);
                    setStudents(studentsResponse.data);
                    console.log(students)
                }
            } catch (error) {
                console.error('Error fetching classes or students', error);
                setError('Error fetching data.');
            }
        };

        fetchClasses();
    }, [user.staffId]);

    const handleAttendanceChange = (studentId, value) => {
        setAttendanceRecords(prevRecords => {
            // Find if the record already exists
            const existingRecord = prevRecords.find(record => record.studentId == studentId);
    
            if (existingRecord) {
                // Update the existing record
                return prevRecords.map(record =>
                    record.studentId == studentId ? { ...record, count: value } : record
                );
            } else {
                // Add a new record
                return [...prevRecords, { studentId, count: value }];
            }
        });
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!totalClassesTakes || attendanceRecords.length === 0) {
            setError('Please fill out all fields.');
            return;
        }
    
        try {
            for (const record of attendanceRecords) {
                const attendance = {
                    count: record.count,
                    classId: classes[0].classId, // Assuming classId from the first class
                    studentId: record.studentId
                };
                console.log(attendance);
                await axios.post('http://localhost:8282/attendance', attendance);
            }
    
            const totalrecord = {
                totalClassesTakes: totalClassesTakes,
                classId: classes[0].classId
            };
            await axios.post('http://localhost:8282/classes/save', totalrecord);
            console.log("totalClassesTakes:", totalrecord);
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };
    

    return (
        <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '800px', margin: '20px auto' }}>
            <h2>Add Attendance Record</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="totalClassesTakes">Total Classes Taken:</label>
                    <input
                        type="number"
                        id="totalClassesTakes"
                        value={totalClassesTakes}
                        onChange={(e) => setTotalClassesTakes(e.target.value)}
                        required
                    />
                </div>
                {students.length > 0 ? (
                    students.map(student => (
                        <div key={student.studentId} style={{ marginBottom: '15px' }}>
                            <label >{student.name}:</label>
                            <input
                                type="number"
                                id={student.studentId}
                                onChange={(e) => handleAttendanceChange(student.studentId, e.target.value)}
                                required
                            />
                        </div>
                    ))
                ) : (
                    <p>No records available.</p>
                )}
                <button type="submit">Submit Attendance</button>
            </form>
        </div>
    );
}

export default AddAttendanceRecord;
