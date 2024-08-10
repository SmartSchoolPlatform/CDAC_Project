import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditSubject = () => {
    const { subjectId } = useParams();
    const [subject, setSubject] = useState({});
    const [staffList, setStaffList] = useState([]);
    const [classList, setClassList] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [selectedClassId, setSelectedClassId] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch staff list
        axios.get('http://localhost:8282/staff')
            .then(response => setStaffList(response.data))
            .catch(error => console.error('Error fetching staff list:', error));

        // Fetch classes list
        axios.get('http://localhost:8282/classes')
            .then(response => setClassList(response.data))
            .catch(error => console.error('Error fetching classes list:', error));

        // Fetch subjects for the selected class
        if (selectedClassId) {
            axios.get(`http://localhost:8282/subjects/classes/${selectedClassId}`)
                .then(response => setSubjects(response.data))
                .catch(error => console.error('Error fetching subjects:', error));
        }
    }, [selectedClassId]);

    useEffect(() => {
        // Fetch subject details if subjectId is provided
        if (subjectId) {
            axios.get(`http://localhost:8282/subjects/${subjectId}`)
                .then(response => setSubject(response.data))
                .catch(error => console.error('Error fetching subject details:', error));
        }
    }, [subjectId]);

    const handleClassChange = (e) => {
        const classId = e.target.value;
        setSelectedClassId(classId);
    };

    const handleStaffChange = (subjectId, staffId) => {
        setSubjects(prevSubjects => 
            prevSubjects.map(subj =>
                subj.subjectId === subjectId
                    ? { ...subj, staffId }
                    : subj
            )
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Update each subject with the new staffId
        subjects.forEach(subj => {
            axios.put(`http://localhost:8282/subjects/update`, subj)
                .catch(error => console.error('Error updating subject:', error));
        });
        //navigate(`/admin/class-subjects/${selectedClassId}`);
        console.log("data send :\n",subjects);
    };

    return (
        <div>
            <h2>Edit Subject</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Class:
                    <select
                        name="classId"
                        value={selectedClassId}
                        onChange={handleClassChange}
                    >
                        <option value="">Select a class</option>
                        {classList.map(cls => (
                            <option key={cls.classId} value={cls.classId}>
                                {cls.className}
                            </option>
                        ))}
                    </select>
                </label>
                {subjects.length > 0 && (
                    <div>
                        <h3>Subjects</h3>
                        <ul>
                            {subjects.map(subj => (
                                <li key={subj.subjectId}>
                                    {subj.subjectName} - 
                                    <select
                                        name="staffId"
                                        value={subj.staffId || ''}
                                        onChange={(e) => handleStaffChange(subj.subjectId, e.target.value)}
                                    >
                                        <option value="">Select Teacher</option>
                                        {staffList.map(staff => (
                                            <option key={staff.staffId} value={staff.staffId}>
                                                {staff.name}
                                            </option>
                                        ))}
                                    </select>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default EditSubject;
