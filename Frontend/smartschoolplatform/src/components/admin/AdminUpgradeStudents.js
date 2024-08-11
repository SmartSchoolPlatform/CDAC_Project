// src/components/AdminUpgradeStudents.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminUpgradeStudents = () => {
  const [currentClass, setCurrentClass] = useState(null);
  const [upgradeClass, setUpgradeClass] = useState(null);
  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8282/classes')
      .then(response => setClasses(response.data))
      .catch(error => console.error('Error fetching classes:', error));
  }, []);

  useEffect(() => {
    if (currentClass) {
      axios.get(`http://localhost:8282/students/class/${currentClass}`)
        .then(response => setStudents(response.data))
        .catch(error => console.error('Error fetching students:', error));
    }
  }, [currentClass]);

  const handleUpgradeStudents = () => {
    if (currentClass && upgradeClass && selectedStudents.length > 0) {
      selectedStudents.forEach(studentId => {
        axios.patch(`http://localhost:8282/students/${studentId}`, { classId: upgradeClass })
          .then(response => console.log('Student upgraded:', response.data))
          .catch(error => console.error('Error upgrading student:', error));
      });
    }
  };

  return (
    <div>
      <h2>Upgrade Students</h2>
      
      <div>
        <label>Current Class:</label>
        <select onChange={(e) => setCurrentClass(e.target.value)}>
          <option value="">Select a class</option>
          {classes.map(cls => (
            <option key={cls.classId} value={cls.classId}>
              {cls.className}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Class to Upgrade:</label>
        <select onChange={(e) => setUpgradeClass(e.target.value)}>
          <option value="">Select a class</option>
          {classes.filter(cls => cls.classId > currentClass).map(cls => (
            <option key={cls.classId} value={cls.classId}>
              {cls.className}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h3>Students in Current Class:</h3>
        {students.map(student => (
          <div key={student.studentId}>
            <input
              type="checkbox"
              value={student.studentId}
              onChange={(e) => {
                const studentId = e.target.value;
                setSelectedStudents(prev =>
                  e.target.checked
                    ? [...prev, studentId]
                    : prev.filter(id => id !== studentId)
                );
              }}
            />
            {student.name}
          </div>
        ))}
      </div>

      <button onClick={handleUpgradeStudents}>Upgrade Students</button>
    </div>
  );
};

export default AdminUpgradeStudents;
