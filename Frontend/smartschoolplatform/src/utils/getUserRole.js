// src/utils/getUserRole.js

const getUserRole = (username) => {
    if (username.startsWith('student')) return 'student';
    if (username.startsWith('parent')) return 'parent';
    if (username.startsWith('teacher')) return 'teacher';
    if (username.startsWith('admin')) return 'admin';
    return null;
  };
  
  export default getUserRole;
  