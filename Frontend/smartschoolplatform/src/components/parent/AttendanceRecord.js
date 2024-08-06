import React from 'react';

function AttendanceRecord() {
  return (
    <div className="container mt-4">
      <h2>Attendance Record</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2024-08-01</td>
            <td>Present</td>
          </tr>
          <tr>
            <td>2024-08-02</td>
            <td>Absent</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
}

export default AttendanceRecord;
