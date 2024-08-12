import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

function Assignments() {
  const [assignments, setAssignments] = useState([]);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        // Fetch student data to get classId
        const studentResponse = await axios.get(`http://localhost:8282/students/${user.username}`);
        const classId = studentResponse.data.classes.classId;
        console.log("classId :\n", classId);

        // Fetch subjects for the class
        const subjectsResponse = await axios.get(`http://localhost:8282/subjects/classes/${classId}`);
        const subjectIds = subjectsResponse.data.map(subject => subject.subjectId);
        console.log("SubjectIds :\n", subjectIds);

        // Fetch assignments based on subjectIds
        const assignmentsResponse = await axios.get(`http://localhost:8282/assignments`);
        const assignmentsData = assignmentsResponse.data;
        console.log("Assignments Data :\n", assignmentsData);

        // Ensure subjectIds are of type number and create a Set for fast lookup
        const subjectIdSet = new Set(subjectIds.map(id => Number(id)));

        // Filter assignments based on subjectIds
        const filteredAssignments = assignmentsData.filter(assignment => {
          // Access subjectId from the nested subject object
          const assignmentSubjectId = Number(assignment.subject.subjectId);
          return subjectIdSet.has(assignmentSubjectId);
        });

        console.log("FilteredAssignments :\n", filteredAssignments);
        setAssignments(filteredAssignments);
      } catch (error) {
        console.error('Error fetching assignments:', error);
        setError('Failed to load assignments.');
      }
    };

    if (user && user.username) {
      fetchAssignments();
    }
  }, [user]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Assignments</h2>
      <ul>
        {assignments.map(assignment => (
          <li key={assignment.assignmentId}>
            {assignment.assignmentName} - Due: {assignment.assignmentDate}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Assignments;
