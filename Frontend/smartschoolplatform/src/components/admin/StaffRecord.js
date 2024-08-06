import React from 'react';

function StaffRecord() {
  // Example staff records data
  const staff = [
    { id: 30001, name: "Mr. Kumar", department: "Mathematics", email: "mr.kumar@example.com" },
    { id: 30002, name: "Ms. Gupta", department: "Science", email: "ms.gupta@example.com" },
    // Add more staff members as needed
  ];

  return (
    <div className="container mt-4">
      <h2>Staff Records</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {staff.map((member) => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.name}</td>
              <td>{member.department}</td>
              <td>{member.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StaffRecord;
    