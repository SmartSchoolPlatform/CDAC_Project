import mockData from '../data/mockData';

export const authenticateUser = (username, password, userType) => {
  // Ensure userType is valid
  if (!mockData.hasOwnProperty(userType)) {
    return null;
  }

  // Find user in the specified userType
  const user = mockData[userType].find(user => user.username === username && user.password === password);
  return user ? userType : null; // Return userType if found, otherwise null
};
