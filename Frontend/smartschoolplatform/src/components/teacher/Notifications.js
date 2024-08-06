import React from 'react';

function Notifications() {
  // Example notifications data
  const notifications = [
    { id: 1, message: "Upcoming exam on 2024-08-15" },
    { id: 2, message: "Assignment deadline extended to 2024-08-20" },
    // Add more notifications as needed
  ];

  return (
    <div className="container mt-4">
      <h2>Notifications</h2>
      <ul className="list-group">
        {notifications.map((notification) => (
          <li key={notification.id} className="list-group-item">
            {notification.message}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
