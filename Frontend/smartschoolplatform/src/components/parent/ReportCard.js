import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

function ParentReportCard() {
  const [studentData, setStudentData] = useState(null);
  const [finalRecords, setFinalRecords] = useState([]);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  // Fetch student data for the parent
  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.get(`http://localhost:8282/parents/${user.username}`);
        setStudentData(response.data.student);
      } catch (error) {
        console.error('Error fetching student data:', error);
        setError('No student data available');
      }
    };

    fetchStudentData();
  }, [user]);

  // Fetch final records based on the student's ID
  useEffect(() => {
    if (studentData && studentData.studentId) {
      const fetchFinalRecords = async () => {
        try {
          const response = await axios.get(`http://localhost:8282/final-records/student/${studentData.studentId}`);
          setFinalRecords(response.data);
        } catch (error) {
          console.error('Error fetching final records:', error);
          setError('No records found');
        }
      };

      fetchFinalRecords();
    }
  }, [studentData]);

  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '800px', margin: '20px auto' }}>
      <h2>Report Cards</h2>
      {finalRecords.length > 0 ? (
        finalRecords.map(record => (
          <div key={record.finalRecordId} style={{ marginBottom: '20px' }}>
            <h3>{record.classes ? record.classes.className : 'Class name not available'}</h3>
            <p>Good At: {record.goodAt}</p>
            <p>Weak At: {record.weakAt}</p>
            <p>Suggestions: {record.suggestions}</p>
          </div>
        ))
      ) : (
        <p>No records found.</p>
      )}
    </div>
  );
}

export default ParentReportCard;
