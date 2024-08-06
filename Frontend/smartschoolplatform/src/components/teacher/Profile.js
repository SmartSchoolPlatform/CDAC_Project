import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

function Profile() {
    const [profileData, setProfileData] = useState(null);
    const { user } = useAuth();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                
                const response = await axios.get(`http://localhost:8282/staff/${user.username}`);
                console.log("Profile Response Data:\n", JSON.stringify(response.data, null, 2));
                setProfileData(response.data); // Adjust based on actual response structure
            } catch (error) {
                console.error('Failed to fetch profile data', error);
            }
        };

        if (user && user.username) {
            fetchProfile();
        }
    }, [user]);

    if (!profileData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-4">
            <h2>Profile</h2>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{profileData.name}</h5>
                    <p className="card-text">Email: {profileData.email}</p>
                    <p className="card-text">Role: {profileData.designation}</p>
                    <p className="card-text">Phone: {profileData.phoneNumber}</p>
                    <p className="card-text">Department: {profileData.department}</p>
                    <p className="card-text">Education: {profileData.educationDetails}</p>
                    <p className="card-text">Date of Birth: {profileData.dateOfBirth}</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;
