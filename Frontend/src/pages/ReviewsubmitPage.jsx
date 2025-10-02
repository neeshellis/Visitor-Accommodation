import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import ReviewForm from '../components/ReviewForm';

export default function ReviewsubmitPage() { 
  return (
    <div>
     
      <Container sx={{ padding: 5, marginTop: 10, backgroundColor: 'rgba(225, 227, 211, 0.9)', fontWeight: 600, 
        minHeight: '5vh', maxWidth: '70%', borderRadius: 2 
     }}> 
      <Typography variant="p" component="h3" sx={{ color:'#333815'}}>
      </Typography>
      <br></br>
      <ReviewForm/>
     </Container>
     </div>
  );
}



