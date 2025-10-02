import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import BookingCalender from '../components/BookingCalender';

export default function BookingPage() {

  const [accommodation, setAccommodation] = useState('');
  const [guests, setGuests] = useState('');
  const [datein, setDateIn] = useState('');
  const [dateout, setDateOut] = useState('');
  const [price, setPrice] = useState('');

  // Define max guests for each accommodation
  const accommodationLimits = {
    valleyinn: 4,
    bunkhouse: 5,
    cottage: 2
  };

  // Get the max guests for selected accommodation
  const maxGuests = accommodation ? accommodationLimits[accommodation] : 5;

  // Handle accommodation change and reset guests if it exceeds new limit
  const handleAccommodationChange = (e) => {
    const newAccommodation = e.target.value;
    setAccommodation(newAccommodation);
    
    // Reset guests if current selection exceeds new accommodation's limit
    if (guests > accommodationLimits[newAccommodation]) {
      setGuests('');
    }
  };

  return (
    <div>
      <Container sx={{ padding: 5, marginTop: 10, backgroundColor: 'rgba(242, 243, 232, 0.9)', fontWeight: 600, 
        minHeight: '5vh', maxWidth: '70%', borderRadius: 2
     }}> 
      <Typography variant="p" component="p" sx={{ color:'#333815'}}>
       Thank you for choosing to stay with us.  Please complete your book your reservation below.
      </Typography>
      <br/>
        <FormControl sx={{ width: '100%' }}>
        <InputLabel>Accommodation</InputLabel>
        <Select
          value={accommodation}
          label="Accommodation"
          onChange={handleAccommodationChange}
        >
          <MenuItem value="valleyinn">The Valley Inn (max 4 guests)</MenuItem>
          <MenuItem value="bunkhouse">The BunkHouse (max 5 guests)</MenuItem>
          <MenuItem value="cottage">The Cottage (max 2 guests)</MenuItem>
        </Select>
      </FormControl>
      <br/><br/>
       <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Number of guests</InputLabel>
        <Select
          value={guests}
          label="Number of guests"
          onChange={(e) => setGuests(e.target.value)}
          disabled={!accommodation} // Disable until accommodation is selected
        >
          <MenuItem value={1}>1 </MenuItem>
          <MenuItem value={2}>2 </MenuItem>
          {maxGuests >= 3 && <MenuItem value={3}>3 </MenuItem>}
          {maxGuests >= 4 && <MenuItem value={4}>4 </MenuItem>}
          {maxGuests >= 5 && <MenuItem value={5}>5 </MenuItem>}
        </Select>
        <br/>
      </FormControl>   
       <br/>
       <BookingCalender/>
     </Container>
    </div>
  );
}