import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

function Assignments() {
  const [classes, setClasses] = useState([]);
  const [assignmentName, setAssignmentName] = useState('');
  const [assignmentDate, setAssignmentDate] = useState('');
  const [selectedSubjectId, setSelectedSubjectId] = useState('');
  const [error, setError] = useState(null);
  const { user } = useAuth();

  // Fetch classes that the teacher is teaching
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get(`http://localhost:8282/subjects/classes/staff/${user.username}`);
        setClasses(response.data);
        console.log("\n\nSubject id of 0 :"+classes);
        console.log("Profile Response Data:\n", JSON.stringify(classes, null, 2));
      } catch (error) {
        console.error('Error fetching classes', error);
        setError('Error fetching classes.');
      }
    };

    fetchClasses();
  }, [user.username]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!assignmentName || !assignmentDate || !selectedSubjectId) {
      setError('Please fill out all fields.');
      return;
    }

    try {
      const assignment = {
        assignmentName,
        assignmentDate,
        subjectId: Number(selectedSubjectId),  // Use the selected class ID as the subjectId
      };
      console.log("\n\n\nhere is the data:\n\n" + JSON.stringify(assignment, null, 2));
      await axios.post('http://localhost:8282/assignments', assignment);
      setAssignmentName('');
      setAssignmentDate('');
      setSelectedSubjectId('');
      setError(null);
      alert('Assignment created successfully!');
    } catch (error) {
      console.error('Error creating assignment', error);
      setError('Error creating assignment.');
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '600px', margin: '20px auto' }}>
      <h2>Create Assignment</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="class">Select Class:</label>
          <select
            id="class"
            value={selectedSubjectId}
            onChange={(e) => setSelectedSubjectId(e.target.value)}
            required
          >
            <option value="">Select a class</option>
            {classes.map(cls => (
              <option key={cls.subjectId} value={cls.subjectId}>
                {cls.classes.className }
              </option>
            ))}

          </select>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="assignmentName">Assignment Name:</label>
          <input
            type="text"
            id="assignmentName"
            value={assignmentName}
            onChange={(e) => setAssignmentName(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="assignmentDate">Due Date:</label>
          <input
            type="date"
            id="assignmentDate"
            value={assignmentDate}
            onChange={(e) => setAssignmentDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Assignment</button>
      </form>
    </div>
  );
}

export default Assignments;
