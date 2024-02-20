import React, { useEffect, useState } from 'react';

const UserComponent: React.FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from backend when component mounts
    fetch('http://localhost:3000/users') // Replace 'http://localhost:7000/users' with your actual backend endpoint
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        return response.json();
      })
      .then(data => {
        setUsers(data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once when component mounts

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.user_ID}>
            {user.username} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserComponent;
