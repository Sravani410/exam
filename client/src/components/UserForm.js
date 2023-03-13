import React, { useState } from 'react';
import { addUser } from '../api';

const UserForm = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    photo: '',
    age: '',
    gender: ''
  });

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addUser(user);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" placeholder="First Name" value={user.firstName} onChange={handleChange} required />
      <input type="text" name="lastName" placeholder="Last Name" value={user.lastName} onChange={handleChange} required />
      <input type="text" name="photo" placeholder="Photo URL" value={user.photo} onChange={handleChange} />
      <input type="number" name="age" placeholder="Age" value={user.age} onChange={handleChange} required />
      <select name="gender" value={user.gender} onChange={handleChange} required>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
