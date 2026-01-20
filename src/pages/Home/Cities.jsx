import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid'; // Dùng Grid v2 nếu có thể, hoặc Grid v1 với size

const cities = [
  { name: 'Hà Nội', img: 'https://images.unsplash.com/photo-1555921015-5532091f6026?w=500' },
  { name: 'TP. Hồ Chí Minh', img: 'https://images.unsplash.com/photo-1529154036614-a60975f5c760?w=500' },
  { name: 'Đà Nẵng', img: 'https://images.unsplash.com/photo-1559592442-7e182c9403db?w=500' },
  { name: 'Đà Lạt', img: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=500' },
];

const Cities = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h5" fontWeight="bold" textAlign="center" mb={4}>
        Thông tin về bất động sản của các thành phố
      </Typography>
      <Grid container spacing={2}>
        {cities.map((city, index) => (
          /* FIX: Bỏ prop 'item', thay 'xs' và 'md' bằng 'size' */
          <Grid key={index} size={{ xs: index === 0 || index === 3 ? 12 : 6, md: index === 0 || index === 3 ? 8 : 4 }}>
            <Box sx={{ 
              height: 250, borderRadius: '15px', overflow: 'hidden', position: 'relative',
              '&:hover img': { transform: 'scale(1.1)' } 
            }}>
              <img src={city.img} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.3s' }} alt={city.name} />
              <Box sx={{ position: 'absolute', bottom: 20, left: 20, color: '#fff', fontWeight: 'bold', fontSize: '1.2rem' }}>
                {city.name}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Cities;