import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'; // Add this import
import { useData } from '../hooks/useData';
import AccommodationCard from '../components/AccommodationCard';

export default function AccommodationPage() { 
    const data = useData("http://localhost:3000/accommodation")

    const storedItems = data?.map(rate => (
    <Grid size={{ xs: 12, sm:6, md: 4 }} key={rate.id} sx={{ display: 'flex' }}>
        <AccommodationCard 
            id={rate.id}
            title={rate.title}
            description={rate.description} 
            images={rate.images} 
            amenities={rate.amenities}
            capacity={rate.capacity}
            price={rate.price}
        />
    </Grid>
))

    return (
        <div>
            <Container sx={{ 
                padding: 2, 
                marginTop: 10, 
                backgroundColor: 'rgba(225, 227, 211, 0.5)', 
                fontWeight: 600, 
                minHeight: '5vh', 
                maxWidth: '70%', 
                borderRadius: 2
            }}> 
                <Grid container spacing={3} justifyContent={"center"}> 
                    {storedItems}
                </Grid>
            </Container>
        </div>
    );
}