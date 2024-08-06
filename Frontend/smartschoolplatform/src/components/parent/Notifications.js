import React from 'react';

function Notifications() {
  return (
    <div className="container mt-4">
      <h2>Notifications</h2>
      <ul className="list-group">
        <li className="list-group-item">Notification 1: Upcoming Exam on 2024-08-10</li>
        <li className="list-group-item">Notification 2: Parent-Teacher Meeting on 2024-08-15</li>
        {/* Add more notifications as needed */}
      </ul>
    </div>
  );
}

export default Notifications;
