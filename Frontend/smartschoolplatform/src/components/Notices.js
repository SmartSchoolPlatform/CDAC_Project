import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Notices() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get('http://localhost:8282/Notices');
        setNotices(response.data);
        console.log("Notices data :\n"+response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading notices: {error.message}</p>;

  return (
    <div className="container mt-4">
      <h2>Notices</h2>
      <div className="list-group">
        {notices.map((notice) => (
          <div key={notice.noticeId} className="list-group-item">
            <h5 className="mb-1">Notice ID: {notice.noticeId}</h5>
            <p className="mb-1">{notice.noticeMessage}</p>
            <small>Date of Issue: {notice.dateOfIssue}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notices;
