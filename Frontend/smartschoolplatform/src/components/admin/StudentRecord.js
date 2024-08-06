import React from 'react';

function StudentRecord() {
  // Example student records data
  const students = [
    { id: 10001, name: "Amit Sharma", grade: "10th", email: "amit.sharma@example.com" },
    { id: 10002, name: "Priya Patel", grade: "9th", email: "priya.patel@example.com" },
    // Add more students as needed
  ];

  return (
    <div className="container mt-4">
      <h2>Student Records</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Grade</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.grade}</td>
              <td>{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentRecord;
