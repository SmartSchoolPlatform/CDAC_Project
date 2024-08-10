import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const StaffRecord = () => {
    const [staffList, setStaffList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8282/staff')
            .then(response => setStaffList(response.data))
            .catch(error => console.error('Error fetching staff data:', error));
    }, []);

    return (
        <div>
            <h2>Staff Records</h2>
            <button>
                <Link to="/admin/create-staff">Create Staff</Link>
            </button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {staffList.map(staff => (
                        <tr key={staff.staffId}>
                            <td>{staff.name}</td>
                            <td>{staff.email}</td>
                            <td>
                                <Link to={`/admin/edit-staff/${staff.staffId}`}>Edit</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StaffRecord;
