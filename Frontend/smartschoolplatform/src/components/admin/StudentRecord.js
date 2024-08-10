import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function StudentRecord() {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState('');

  useEffect(() => {
    // Fetch students and classes data
    axios.get('http://localhost:8282/students')
      .then(response => {
        setStudents(response.data);
        setFilteredStudents(response.data); // Show all students initially
      })
      .catch(error => {
        console.error('Error fetching students:', error);
      });

    axios.get('http://localhost:8282/classes')
      .then(response => {
        setClasses(response.data);
      })
      .catch(error => {
        console.error('Error fetching classes:', error);
      });
  }, []);

  useEffect(() => {
    // Filter students based on selected class
    if (selectedClass === '') {
      setFilteredStudents(students);
    } else {
      setFilteredStudents(students.filter(student => student.classes && student.classes.className === selectedClass));
    }
  }, [selectedClass, students]);

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  return (
    <div>
      <h2>Student Records</h2>
      <Link to="/admin/create-student" className="btn btn-primary">Add New Student</Link>
      <div>
        <label>Filter by Class:</label>
        <select value={selectedClass} onChange={handleClassChange}>
          <option value="">All Classes</option>
          {classes.map(cls => (
            <option key={cls.classId} value={cls.className}>{cls.className}</option>
          ))}
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Class</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map(student => (
            <tr key={student.studentId}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.classes ? student.classes.className : 'N/A'}</td>
              <td>
                <Link to={`/admin/edit-student/${student.studentId}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentRecord;
