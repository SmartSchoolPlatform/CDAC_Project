// src/components/ParentRecord.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ParentRecord() {
  const [parents, setParents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8282/parents')
      .then(response => {
        setParents(response.data);
      })
      .catch(error => {
        console.error('Error fetching parents:', error);
      });
  }, []);

  return (
    <div>
      <h2>Parent Records</h2>
      <Link to="/admin/create-parent" className="btn btn-primary">Add New Parent</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Student</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {parents.map(parent => (
            <tr key={parent.parentId}>
              <td>{parent.name}</td>
              <td>{parent.email}</td>
              <td>{parent.phoneNumber}</td>
              <td>{parent.student ? parent.student.name : 'N/A'}</td>
              <td>
                <Link to={`/admin/edit-parent/${parent.parentId}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ParentRecord;
