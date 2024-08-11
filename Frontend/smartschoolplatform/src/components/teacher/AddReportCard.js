import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

function AddReportCard() {
  const [classes, setClasses] = useState([]);
  const [classId, setClassId] = useState();
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState('');
  const [reportCard, setReportCard] = useState({
    goodAt: '',
    weakAt: '',
    suggestions: '',
  });
  const [error, setError] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get('http://localhost:8282/classes');
        const teacherClasses = response.data.filter(cls => cls.staff.staffId == user.username);
        setClasses(teacherClasses);
        if (teacherClasses.length > 0) {
          const classId = teacherClasses[0].classId;
          setClassId(classId);
          const studentsResponse = await axios.get(`http://localhost:8282/students/class/${classId}`);
          setStudents(studentsResponse.data);
        }
      } catch (error) {
        console.error('Error fetching classes or students', error);
        setError('Error fetching data.');
      }
    };

    fetchClasses();
  }, [user.username]);

  const handleStudentChange = (e) => {
    setSelectedStudent(e.target.value);
  };

  const handleInputChange = (e) => {
    setReportCard({
      ...reportCard,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedStudent || !reportCard.goodAt || !reportCard.weakAt || !reportCard.suggestions) {
      setError('Please fill out all fields.');
      return;
    }

    const finalRecord = {
      goodAt: reportCard.goodAt,
      weakAt: reportCard.weakAt,
      suggestions: reportCard.suggestions,
      studentId: Number(selectedStudent),
      classId: classId, // Replace with actual class ID if needed
      // Add logic to determine if this is an update or create
    };
    console.log("\n\nFinal record :\n",finalRecord,"\n\n")

    try {
      // Adjust the URL based on whether you are creating or updating
      const url = 'http://localhost:8282/final-records';
      await axios.post(url, finalRecord);
      alert('Report card saved successfully.');
      // Clear form fields or redirect if needed
    } catch (error) {
      console.error('Error submitting report card:', error);
      setError('Error submitting report card.');
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '800px', margin: '20px auto' }}>
      <h2>Add Report Card</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="student">Select Student:</label>
          <select id="student" value={selectedStudent} onChange={handleStudentChange} required>
            <option value="">Select a student</option>
            {students.map(student => (
              <option key={student.studentId} value={student.studentId}>
                {student.name}
              </option>
            ))}
          </select>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="goodAt">Good At:</label>
          <input
            type="text"
            id="goodAt"
            name="goodAt"
            value={reportCard.goodAt}
            onChange={handleInputChange}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="weakAt">Weak At:</label>
          <input
            type="text"
            id="weakAt"
            name="weakAt"
            value={reportCard.weakAt}
            onChange={handleInputChange}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="suggestions">Suggestions:</label>
          <input
            type="text"
            id="suggestions"
            name="suggestions"
            value={reportCard.suggestions}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Submit Report Card</button>
      </form>
    </div>
  );
}

export default AddReportCard;
