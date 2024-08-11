import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

function AddAttendanceRecord() {    
  const [totalAttendance,setTotalAttendance]=useState();
  const [studentId, setStudentId] = useState(null);
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

  async function getStudentId() {
    try {
      // Make the HTTP GET request
      const response = await axios.get(`http://localhost:8282/parents/${user.username}`);
      
      // Extract the studentId from the response data
      const studentId = response.data.student ? response.data.student.studentId : null;
  
      if (studentId === null) {
        console.error('Student ID not found in the response.');
      }
  
      return studentId;
    } catch (error) {
      console.error('Error fetching parent data:', error);
      return null;
    }
  }

  const fetchAttendanceData = async () => {
    try {
      //const respstd= await axios.get(`http://localhost:8282/parent/${user.username}`);
      const id = await getStudentId();
      setStudentId(id);
      const response = await axios.get(`http://localhost:8282/attendance/student/${id}`);
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

export default AddAttendanceRecord;
