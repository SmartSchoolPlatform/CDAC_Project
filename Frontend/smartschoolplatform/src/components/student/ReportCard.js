import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ReportCard() {
  const [finalRecords, setFinalRecords] = useState([]);
  const [error, setError] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(10041); // Example student ID

  useEffect(() => {
    const fetchFinalRecords = async () => {
      try {
        const response = await axios.get(`http://localhost:8282/final-records/student/${selectedStudent}`);
        setFinalRecords(response.data);
      } catch (error) {
        console.error('Error fetching final records:', error);
        setError('Error fetching final records.');
      }
    };

    fetchFinalRecords();
  }, [selectedStudent]);

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

export default ReportCard;
