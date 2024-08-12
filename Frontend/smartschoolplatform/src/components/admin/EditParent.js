// src/components/EditParent.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditParent() {
  const { parentId } = useParams();
  const navigate = useNavigate();
  const [parent, setParent] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    suggestions: '',
    student: {} // assuming student details can be edited
  });

  useEffect(() => {
    axios.get(`http://localhost:8282/parents/${parentId}`)
      .then(response => {
        setParent(response.data);
      })
      .catch(error => {
        console.error('Error fetching parent details:', error);
      });
  }, [parentId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParent(prevParent => ({
      ...prevParent,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8282/parents/${parentId}`, parent)
      .then(response => {
        navigate('/admin/parent-record');
      })
      .catch(error => {
        console.error('Error updating parent details:', error);
      });
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this parent?')) {
      axios.delete(`http://localhost:8282/parents/${parentId}`)
        .then(response => {
          navigate('/admin/parent-record');
        })
        .catch(error => {
          console.error('Error deleting parent:', error);
        });
    }
  };

  return (
    <div className="container mt-4">
      <h2>Edit Parent</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={parent.name}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={parent.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={parent.phoneNumber}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={parent.address}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Suggestions</label>
          <input
            type="text"
            name="suggestions"
            value={parent.suggestions}
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

export default EditParent;
