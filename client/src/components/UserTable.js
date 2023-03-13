import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../api';
import User from './User';

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await getAllUsers();
      setUsers(result.data);
    };
    fetchUsers();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Photo</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {users.sort((a, b) => a.age - b.age).map(user => (
          <User key={user._id} user={user} />
        ))}
      </tbody>
    </table>
  );
};

export default UserTable
