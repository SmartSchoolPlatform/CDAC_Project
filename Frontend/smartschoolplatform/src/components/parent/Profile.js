// src/components/parent/Profile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

const Profile = () => {
    const [parentData, setParentData] = useState(null);
    const { user } = useAuth();

    useEffect(() => {
        const fetchParentData = async () => {
            if (user && user.role === 'Parent') {
                try {
                    const response = await axios.get(`http://localhost:8282/parents/${user.username}`);
                    setParentData(response.data);
                } catch (error) {
                    console.error('Error fetching parent data', error);
                }
            }
        };

        fetchParentData();
    }, [user]);

    if (!parentData) {
        return <div>Loading...</div>;
    }

    const { name, email, phoneNumber, address, suggestions } = parentData;

    return (
        <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '800px', margin: '20px auto' }}>
            <h2>Parent Profile</h2>
            <div style={{ marginBottom: '20px' }}>
                <h3>Parent Details</h3>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Phone Number:</strong> {phoneNumber}</p>
                <p><strong>Address:</strong> {address}</p>
                <p><strong>Suggestions:</strong> {suggestions}</p>
            </div>
        </div>
    );
};

export default Profile;
