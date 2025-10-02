import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function ReviewForm() {
  const [formData, setFormData] = useState({
    name: '',
    dateOfStay: '',
    accommodation: '',
    review: ''
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
        name="name"
        label="Name:"
        size="small"
        variant="filled"
        value={formData.name}
        onChange={handleChange}
        required
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        name="dateOfStay"
        label="Date of your stay:"
        size="small"
        variant="filled"
        value={formData.dateOfStay}
        onChange={handleChange}
        required
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        name="accommodation"
        label="Name of accommodation:"
        size="small"
        variant="filled"
        value={formData.accommodation}
        onChange={handleChange}
        required
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        name="review"
        label="Thank you for leaving a review:"
        multiline
        rows={8}
        variant="filled"
        value={formData.review}
        onChange={handleChange}
        required
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
        Submit
      </Button>
    </Box>
  );
}