import React from 'react';

function Assignments() {
  return (
    <div className="container mt-4">
      <h2>Assignments</h2>
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="d-flex align-items-center">
            <i className="fa-solid fa-list-check fa-2x me-2"></i>
            <span>Math Homework</span>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="d-flex align-items-center">
            <i className="fa-solid fa-list-check fa-2x me-2"></i>
            <span>Science Project</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assignments;
