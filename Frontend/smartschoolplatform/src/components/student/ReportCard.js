import React from 'react';

function ReportCard() {
  return (
    <div className="container mt-4">
      <h2>Report Card</h2>
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="d-flex align-items-center">
            <i className="fa-solid fa-file fa-2x me-2"></i>
            <span>Semester 1 Report</span>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="d-flex align-items-center">
            <i className="fa-solid fa-file fa-2x me-2"></i>
            <span>Semester 2 Report</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportCard;
