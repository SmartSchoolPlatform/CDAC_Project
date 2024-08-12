import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditStudent() {
  const { studentId } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    studentId: '',
    name: '',
    address: '',
    admissionDate: '',
    dateOfBirth: '',
    email: '',
    gender: '',
    phoneNumber: '',
    profilePic: '',
    classId: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:8282/students/${studentId}`)
      .then(response => {
        setStudent(response.data);
      })
      .catch(error => {
        console.error('Error fetching student details:', error);
      });
  }, [studentId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent(prevStudent => ({
      ...prevStudent,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8282/students/${studentId}`, student)
      .then(response => {
        navigate('/admin/student-record');
      })
      .catch(error => {
        console.error('Error updating student details:', error);
      });
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      axios.delete(`http://localhost:8282/students/${studentId}`)
        .then(response => {
          navigate('/admin/student-record');
        })
        .catch(error => {
          console.error('Error deleting student:', error);
        });
    }
  };

  return (
    <div className="container mt-4">
      <h2>Edit Student</h2>
      <div className="form-group">
        <label>Student Id</label>
        <input
          type="text"
          name="studentId"
          value={student.studentId}
          disabled
          className="form-control"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={student.address}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Admission Date</label>
          <input
            type="date"
            name="admissionDate"
            value={student.admissionDate.substring(0, 10)} // Format to yyyy-mm-dd
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={student.dateOfBirth.substring(0, 10)} // Format to yyyy-mm-dd
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={student.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <input
            type="text"
            name="gender"
            value={student.gender}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={student.phoneNumber}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Profile Pic</label>
          <input
            type="text"
            name="profilePic"
            value={student.profilePic}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
        <button type="button" className="btn btn-danger ml-2" onClick={handleDelete}>Delete</button>
      </form>
    </div>
  );
}

export default EditStudent;
