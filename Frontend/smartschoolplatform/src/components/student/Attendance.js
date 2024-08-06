import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

function Attendance() {
  const attendanceData = {
    labels: ['Present', 'Absent'],
    datasets: [{
      label: 'Attendance',
      data: [70, 30],
      backgroundColor: ['#4caf50', '#f44336'],
      borderColor: '#ffffff',
      borderWidth: 2,
    }]
  };
  return (
    <div className="container mt-4">
      <h2>Attendance</h2>
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="d-flex align-items-center">
            <i className="fa-solid fa-calendar-day fa-2x me-2"></i>
            <span>2024-08-01: Present</span>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="d-flex align-items-center">
            <i className="fa-solid fa-calendar-day fa-2x me-2"></i>
            <span>2024-08-02: Absent</span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h4>Attendance Overview</h4>
        <Pie data={attendanceData} />
      </div>
    </div>
  );
}

export default Attendance;
