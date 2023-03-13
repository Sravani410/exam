import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
  return (
    <tr>
      <td>
        <Link to={`/users/${user._id}`}>{user.firstName}</Link>
      </td>
      <td>{user.lastName}</td>
      <td>
        <img src={user.photo} alt="user" width="100" height="100" />
      </td>
      <td>{user.age}</td>
      <td>{user.gender}</td>
      <td>
        <Link to={`/users/edit/${user._id}`}>Edit</Link>
      </td>
      <td>
        <button>Delete</button>
      </td>
    </tr>
  );
};

export default User;
