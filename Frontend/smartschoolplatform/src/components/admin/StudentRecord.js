import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StudentRecord() {
  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedClassId, setSelectedClassId] = useState('');
  const [editingStudent, setEditingStudent] = useState(null);

  useEffect(() => {
    // Fetch all classes
    axios.get('http://localhost:8282/classes')
      .then(response => {
        setClasses(response.data);
      })
      .catch(error => console.error('Error fetching classes:', error));
  }, []);

  const handleClassChange = (e) => {
    setSelectedClassId(e.target.value);
  };

  const handleFilterStudents = () => {
    // Fetch students by selected class ID
    axios.get(`http://localhost:8282/students?classId=${selectedClassId}`)
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => console.error('Error fetching students:', error));
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
  };

  const handleDelete = (studentId) => {
    axios.delete(`http://localhost:8282/students/${studentId}`)
      .then(() => {
        setStudents(students.filter(student => student.studentId !== studentId));
      })
      .catch(error => console.error('Error deleting student:', error));
  };

  const handleUpdateStudent = (updatedStudent) => {
    axios.put(`http://localhost:8282/students/${updatedStudent.studentId}`, updatedStudent)
      .then(() => {
        setStudents(students.map(student => student.studentId === updatedStudent.studentId ? updatedStudent : student));
        setEditingStudent(null);
      })
      .catch(error => console.error('Error updating student:', error));
  };

  return (
    <div className="container mt-4">
      <h2>Student Records</h2>
      <div className="mb-3">
        <select className="form-select" onChange={handleClassChange}>
          <option value="">Select Class</option>
          {classes.map(cls => (
            <option key={cls.classId} value={cls.classId}>
              {cls.className}
            </option>
          ))}
        </select>
        <button className="btn btn-primary mt-2" onClick={handleFilterStudents}>Filter Students</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.studentId}>
              <td>{student.studentId}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>
                <button className="btn btn-info btn-sm" onClick={() => handleEdit(student)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(student.studentId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingStudent && (
        <div className="mt-4">
          <h3>Edit Student</h3>
          <form onSubmit={(e) => {
            e.preventDefault();
            handleUpdateStudent(editingStudent);
          }}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                value={editingStudent.name}
                onChange={(e) => setEditingStudent({ ...editingStudent, name: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={editingStudent.email}
                onChange={(e) => setEditingStudent({ ...editingStudent, email: e.target.value })}
              />
            </div>
            {/* Add more fields as needed */}
            <button type="submit" className="btn btn-primary">Update</button>
            <button
              type="button"
              className="btn btn-secondary ms-2"
              onClick={() => setEditingStudent(null)}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default StudentRecord;
