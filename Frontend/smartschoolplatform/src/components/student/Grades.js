import React from 'react';

function Grades() {
  return (
    <div className="container mt-4">
      <h2>Grades</h2>
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="d-flex align-items-center">
            <i className="fa-solid fa-clipboard-check fa-2x me-2"></i>
            <span>Math: A</span>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="d-flex align-items-center">
            <i className="fa-solid fa-clipboard-check fa-2x me-2"></i>
            <span>Science: B+</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grades;
