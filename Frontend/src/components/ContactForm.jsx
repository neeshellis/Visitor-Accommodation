import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
      <TextField
        fullWidth
        variant="filled"
        name="name"
        label="Name"
        value={formData.name}
        onChange={handleChange}
        required
        sx={{ mb: 2 }}
      />
      <TextField
        variant="filled"
        fullWidth
        name="email"
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        name="subject"
        label="Subject"
        value={formData.subject}
        onChange={handleChange}
        required
        variant="filled"
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        name="message"
        label="Message"
        multiline
        rows={4}
        value={formData.message}
        onChange={handleChange}
        required
        variant="filled"
        sx={{ mb: 2 }}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: '#333815',
          '&:hover': {
            backgroundColor: '#4a5020',
          },
          mt: 2
        }}
      >
        Send Message
      </Button>
    </Box>
  );
}