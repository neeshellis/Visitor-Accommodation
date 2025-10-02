import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import ReviewForm from '../components/ReviewForm';
import Grid from '@mui/material/Grid'; // Add this import
import { useData } from '../hooks/useData';
import ReviewsCard from '../components/ReviewsCard';
import { Link } from 'react-router-dom';


export default function ReviewsPage() { 
  const data = useData("http://localhost:3000/reviews")
const storedItems = data?.map(rate => (
    <Grid size={{ xs: 12, sm:6, md: 4 }}  key={rate.id} sx={{ display: 'flex' }}>
        <ReviewsCard 
          review={rate.review}
        />
    </Grid>
))

   return (
    <div>
      <Container sx={{ padding: 5, marginTop: 10, backgroundColor: 'rgba(225, 227, 211, 0.9)', fontWeight: 600, 
        minHeight: '5vh', maxWidth: '70%', borderRadius: 2
     }}> 
      <Typography variant="p" component="p" sx={{ color:'#333815'}}>
       Hear what our guests have to say ..
      </Typography>
      <br/>
      <Grid container spacing={2} justifyContent={"center"}>
       {storedItems}
     </Grid>
     <br/>
    <Button 
        component={Link} 
        to="/reviewsubmit"
        size="medium" 
        sx={{ 
          backgroundColor: 'skyblue', 
          color: 'white', 
          '&:hover': { color: 'white', backgroundColor: '#7e7c81de' } }}
        >
          Login to Submit a Review
        </Button> 
     </Container>
     </div>
  );
}

