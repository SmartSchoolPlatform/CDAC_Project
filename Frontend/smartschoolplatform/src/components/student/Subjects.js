import React from 'react';

function Subjects() {
  return (
    <div className="container mt-4">
      <h2>Subjects</h2>
      <div className="row">
        <div className="col-md-3 mb-3">
          <div className="d-flex align-items-center">
            <i className="fa-solid fa-calculator fa-2x me-2"></i>
            <span>Math</span>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="d-flex align-items-center">
            <i className="fa-solid fa-atom fa-2x me-2"></i>
            <span>Science</span>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="d-flex align-items-center">
            <i className="fa-solid fa-globe fa-2x me-2"></i>
            <span>History</span>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="d-flex align-items-center">
            <i className="fa-solid fa-book-open fa-2x me-2"></i>
            <span>English</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subjects;
