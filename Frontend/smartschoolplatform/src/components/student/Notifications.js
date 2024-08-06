import React from 'react';

function Notifications() {
  return (
    <div className="container mt-4">
      <h2>Notifications</h2>
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="d-flex align-items-center">
            <i className="fa-solid fa-bell fa-2x me-2"></i>
            <span>Assignment due tomorrow</span>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="d-flex align-items-center">
            <i className="fa-solid fa-bell fa-2x me-2"></i>
            <span>Parent-teacher meeting scheduled</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
