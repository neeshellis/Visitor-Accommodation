import { useState, useContext, useEffect } from 'react';
import { useUserContext } from "../context/UserContext";
import { MyThemeContext } from "../context/MyThemeProvider";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import RegisterForm from './RegisterForm';
import MyThemeProvider from '../context/MyThemeProvider';

export default function ProfileForm() {
  const theme = useContext(MyThemeContext); // Added missing theme context
  const [submitResult, setSubmitResult] = useState(''); // Added missing state
  
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    email: '',
    mobile: ''
  });

  useEffect(() => {
    fetch('http://localhost:3000/user')
      .then(res => res.json())
      .then(data => {
        const user = data[0];
        setFormData({
          username: user.username,
          password: '', // Don't populate password from API
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          mobile: user.mobile
        });
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []); // Added empty dependency array

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your update logic here
    console.log('Form submitted:', formData);
    setSubmitResult('Profile updated successfully!');
  };

  return (
    <div className="LoginForm componentBox"
      style={{ 
        background: theme?.background || '#fff', 
        color: theme?.foreground || '#000', 
        justifyContent: 'center', 
        margin: '20px auto', 
        maxWidth: '70%', 
        minHeight: '5vh',  
        padding: 16, 
        borderRadius: 12 
      }}>
      <form onSubmit={handleSubmit} noValidate>
        <div className="formRow">
          <TextField 
            type="text" 
            variant="filled" 
            label="Username:" 
            value={formData.username} 
            name="username"
            onChange={handleChange} 
            required 
            fullWidth
          />
        </div>
        <br/>
        <div className="formRow">
          <TextField 
            type="password" 
            variant="filled" 
            label="Password" 
            value={formData.password} 
            name="password"
            onChange={handleChange} 
            required 
            fullWidth
          />
        </div>
        <br/>
        <div className="formRow">
          <TextField 
            type="text" 
            variant="filled" 
            label="First Name:" 
            value={formData.firstname} 
            name="firstname"
            onChange={handleChange} 
            required 
            fullWidth
          />
        </div>
        <br/>
        <div className="formRow">
          <TextField 
            type="text" 
            variant="filled" 
            label="Last Name:" 
            value={formData.lastname} 
            name="lastname"
            onChange={handleChange} 
            required 
            fullWidth
          />
        </div>
        <br/>
        <div className="formRow">
          <TextField 
            type="tel" 
            variant="filled" 
            label="Mobile:" 
            value={formData.mobile} 
            name="mobile"
            onChange={handleChange} 
            required 
            fullWidth
          />
        </div>
        <br/>
        <div className="formRow">
          <TextField 
            type="email" 
            variant="filled" 
            label="Email:" 
            value={formData.email} 
            name="email"
            onChange={handleChange} 
            required 
            fullWidth
          />
        </div>
        <br/>
        <Button type="submit" variant="contained">Update</Button>
        <p aria-live="polite">{submitResult}</p>
      </form>
    </div>
  );
}

