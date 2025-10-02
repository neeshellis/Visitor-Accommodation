import { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Slideshow({ images, alt }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', height: 200 }}>
      <img 
        src={images[currentIndex]} 
        alt={`${alt} - ${currentIndex + 1}`}
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover' 
        }}
      />
      <IconButton
        onClick={prevSlide}
        sx={{
          position: 'absolute',
          left: 8,
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255,255,255,0.7)',
          '&:hover': { backgroundColor: 'rgba(255,255,255,0.9)' }
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      <IconButton
        onClick={nextSlide}
        sx={{
          position: 'absolute',
          right: 8,
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255,255,255,0.7)',
          '&:hover': { backgroundColor: 'rgba(255,255,255,0.9)' }
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
}