import React from 'react';

function Assignments() {
  // Example assignments data
  const assignments = [
    { id: 1, title: "Math Homework", dueDate: "2024-08-10" },
    { id: 2, title: "Science Project", dueDate: "2024-08-15" },
    // Add more assignments as needed
  ];

  return (
    <div className="container mt-4">
      <h2>Assignments</h2>
      <ul className="list-group">
        {assignments.map((assignment) => (
          <li key={assignment.id} className="list-group-item">
            {assignment.title} - Due: {assignment.dueDate}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Assignments;
