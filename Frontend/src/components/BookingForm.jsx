import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/Select';
import BookingCalender from '../components/BookingCalender';


export default function BookingForm() {
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
        name="name"
        label="Name"
        value={formData.name}
        onChange={handleChange}
        required
        variant="outlined"
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        name="email"
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        variant="outlined"
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        name="subject"
        label="Subject"
        value={formData.subject}
        onChange={handleChange}
        required
        variant="outlined"
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
        variant="outlined"
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
        }}
      >
        Send Message
      </Button>
    </Box>
  );
}