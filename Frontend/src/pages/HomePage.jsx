
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';


export default function HomePage() { 
  return (
    <div>
       <div>
       <Typography variant="body" component="h3"  
       sx={{ marginTop: 3, 
       padding: 1, 
       color: '#c9a450ff', 
       textShadow: '-1px -1px 0 white',
       fontSize: '2rem',
       fontFamily: 'inherit'
       }}>
      Stay in Wānaka, experience the magic!
      </Typography>
      </div>
      <Container sx={{ 
     fontStyle: 'italic', 
      padding: 1, 
        marginTop: .5, 
        backgroundColor: 'rgba(247, 247, 244, 0.7)', 
        minHeight: '5vh',
      maxWidth: '80%', 
        borderRadius: 4 
       }}> 
      <Typography 
      variant="body2" 
        component="p" 
        sx={{ 
        color: 'olivegree',
         fontSize: '.9rem',
        fontFamily: 'inherit' 
       }}>
        Regenerative tourism is alive and flourishing here in Wānaka, New Zealand. We welcome you to explore with the locals the magic behind this beautiful corner of the world.
       </Typography>
      </Container>    
    <Box
    component="video"
     sx={{
    width: 'calc(100% - 20px)', 
    height: 'auto', 
    display: 'block',
    margin: '35vh auto 60px auto', // Centers horizontally and adds bottom margin
    border: '6px solid rgba(247, 247, 244, 0.7)',
    borderRadius: 2, // Optional: adds rounded corners
    boxSizing: 'border-box' // Includes border in width calculation
  }}
    autoPlay
    muted
    playsInline
    loop
    >
    <source src="/assets/video/wanaka-slides.mp4" type="video/mp4"  />
    Your browser does not support the video tag.
    </Box>
    </div>

  );
}


    