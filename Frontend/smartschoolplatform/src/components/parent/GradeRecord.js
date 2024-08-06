import React from 'react';

function GradeRecord() {
  return (
    <div className="container mt-4">
      <h2>Grade Record</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Math</td>
            <td>A</td>
          </tr>
          <tr>
            <td>Science</td>
            <td>B+</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
}

export default GradeRecord;
