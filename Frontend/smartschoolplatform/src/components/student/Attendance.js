import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

function Attendance() {    
  const [totalAttendance,setTotalAttendance]=useState();
  const { user } = useAuth();
  const [attendanceData, setAttendanceData] = useState({
    labels: ['Present', 'Absent'],
    datasets: [{
      label: 'Attendance',
      data: [0, 0], // Initial data
      backgroundColor: ['#4caf50', '#f44336'],
      borderColor: '#ffffff',
      borderWidth: 2,
    }]
  });

  const fetchAttendanceData = async () => {
    try {
      
      const response = await axios.get(`http://localhost:8282/attendance/student/${user.username}`);
      const data = response.data;
      console.log(data);

      if (data.length > 0) {
        const totalClassesTakes = data[data.length-1].classes.totalClassesTakes;
        const count = data[data.length -1].count;
        setTotalAttendance(totalClassesTakes);
        const presentDays = count;
        const absentDays = totalClassesTakes - count;

        setAttendanceData({
          labels: ['Present', 'Absent'],
          datasets: [{
            label: 'Attendance',
            data: [presentDays, absentDays],
            backgroundColor: ['#4caf50', '#f44336'],
            borderColor: '#ffffff',
            borderWidth: 2,
          }]
        });
      }
    } catch (error) {
      console.error("Error fetching attendance data:", error);
    }
  };

  useEffect(() => {
    fetchAttendanceData();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Attendance</h2>
      <div className="mt-4">
        <h4>Attendance Overview</h4>
        <h5>Total classes {totalAttendance}</h5>
        <Pie data={attendanceData} />
      </div>
    </div>
  );
}

export default Attendance;
