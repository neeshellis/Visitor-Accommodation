import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Slideshow from '../components/SlideshowCard'
import Grid from '@mui/material/Grid';


// In your AccommodationCard.jsx
export default function AccommodationCard({title, description, images, amenities, capacity, price}) {
  return (
 
    <Card sx={{ 
      maxWidth: '100%', 
      height: '100%', 
      display: 'flex',
      flexDirection: 'column'
    }}>
      <CardContent sx={{ 
        flexGrow: 1, 
        display: 'flex', 
        flexDirection: 'column',
      }}>
        <Typography gutterBottom variant="p" component="div">
         {title} 
        </Typography>
        <Typography variant="body2" sx={{ flexGrow: 1 }}>
          {description}
        </Typography>
        <Slideshow images={images} alt={title} />
        <br/>
        <Typography variant="body2" sx={{ fontSize: '.8rem', flexGrow: 1 }}>
          {amenities}
        </Typography>
        <br/>
        <Typography variant="h6" sx={{ color: '#333815', fontWeight: 600 }}>
          {price}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '.6rem', flexGrow: 1 }}>
          {capacity}
        </Typography>
       </CardContent>
       <CardActions sx={{ justifyContent: 'center' }}>
        <Button 
        component={Link} 
        to="/booking"
        size="medium" 
        sx={{ 
          backgroundColor: 'skyblue', 
          color: 'white', 
          '&:hover': { color: 'white', backgroundColor: '#7e7c81de' } }}
        >
          Book to Stay
        </Button> 
      </CardActions>
    </Card>

  );
}