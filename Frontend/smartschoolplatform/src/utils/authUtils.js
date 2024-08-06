import mockData from '../data/mockData';

export const authenticateUser = (username, password) => {
  // Check each user type in mockData
  for (const userType in mockData) {
    if (mockData.hasOwnProperty(userType)) {
      // Find user in the current user type
      const user = mockData[userType].find(user => user.username === username && user.password === password);
      if (user) {
        return userType; // Return user type if found
      }
    }
  }
  return null; // Return null if not found
};
