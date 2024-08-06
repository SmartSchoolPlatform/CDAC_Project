import React from 'react';
import Profile from './Profile';
import Subjects from './Subjects';
import Assignments from './Assignments';
import ReportCard from './ReportCard';
import Attendance from './Attendance';
import Grades from './Grades';
import Notifications from './Notifications';

function Content({ activeSection }) {
  return (
    <div id="content">
      {activeSection === 'profile' && <Profile />}
      {activeSection === 'subjects' && <Subjects />}
      {activeSection === 'assignments' && <Assignments />}
      {activeSection === 'report-card' && <ReportCard />}
      {activeSection === 'attendance' && <Attendance />}
      {activeSection === 'grades' && <Grades />}
      {activeSection === 'notifications' && <Notifications />}
    </div>
  );
}
export default Content;