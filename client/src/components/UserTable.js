// import React, { useState, useEffect } from 'react';
// import { getAllUsers } from '../api';
// import User from './User';

// const UserTable = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const result = await getAllUsers();
//       setUsers(result.data);
//     };
//     fetchUsers();
//   }, []);

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Photo</th>
//           <th>Age</th>
//           <th>Gender</th>
//           <th>Edit</th>
//           <th>Delete</th>
//         </tr>
//       </thead>
//       <tbody>
//         {users.sort((a, b) => a.age - b.age).map(user => (
//           <User key={user._id} user={user} />
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default UserTable

import { useState, useEffect } from 'react';
import axios from 'axios';

function UserTable() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3000/users');
        setUsers(response.data);
        setFilteredUsers(response.data);
      } catch (error) {
        console.error(error);
        alert('Failed to fetch users!');
      }
    }
    fetchData();
  }, []);

  function handleEdit(id

