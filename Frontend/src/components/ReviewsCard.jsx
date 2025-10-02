import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


export default function ReviewsCard({review}) {
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
        fontWeight: '300',
        fontStyle: 'Italic',
        fontSize: '12px'
      }}>
        <Typography gutterBottom variant="p" component="div">
         {review} 
        </Typography>
         <br/>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
      </CardActions>
    </Card>
    
);
}