import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const ClassSubjectList = () => {
    const { classId } = useParams();
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8282/subjects/${classId}`)
            .then(response => setSubjects(response.data))
            .catch(error => console.error('Error fetching subjects:', error));
    }, [classId]);

    return (
        <div>
            <h2>Subjects for Class {classId}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Subject Name</th>
                        <th>Assigned Teacher</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {subjects.map(subject => (
                        <tr key={subject.subjectId}>
                            <td>{subject.subjectName}</td>
                            <td>{subject.staff ? subject.staff.name : 'Unassigned'}</td>
                            <td>
                                <Link to={`/admin/edit-subject/${subject.subjectId}`}>Edit</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ClassSubjectList;
