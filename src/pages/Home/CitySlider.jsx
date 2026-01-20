import React from 'react';
import { Box, Typography, Container, Card, CardMedia, Grid } from '@mui/material';

const cities = [
  { name: 'Hồ Chí Minh', count: '3 Properties', img: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=400' },
  { name: 'Thanh Hóa', count: '1 Properties', img: 'https://images.unsplash.com/photo-1621245033771-e141718db151?auto=format&fit=crop&w=400' },
  { name: 'Ninh Thuận', count: '2 Properties', img: 'https://images.unsplash.com/photo-1580913425028-230b0def4a3a?auto=format&fit=crop&w=400' },
  { name: 'Hà Nội', count: '3 Properties', img: 'https://images.unsplash.com/photo-1509030450996-93f2e1d4967a?auto=format&fit=crop&w=400' },
  { name: 'Đà Nẵng', count: '5 Properties', img: 'https://images.unsplash.com/photo-1559592413-7ece35b49c2d?auto=format&fit=crop&w=400' }
];

const CitySlider = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom sx={{ color: '#1a1a1a' }}>
        Thông tin về bất động sản của thành phố
      </Typography>
      <Box sx={{ mb: 6 }} />
      
      <Grid container spacing={2}>
        {cities.map((city) => (
          /* FIX: Bỏ prop 'item', 'xs', 'sm', 'md'. 
             Dùng 'sx' để chia cột (12/5 = 20% mỗi cột trên desktop) */
          <Grid 
            key={city.name} 
            sx={{ 
              width: { xs: '100%', sm: '50%', md: '20%' }, // Giữ nguyên layout 5 cột
              px: 1, mb: 2 
            }}
          >
            <Card sx={{ 
              borderRadius: '20px', 
              position: 'relative', 
              height: '350px', 
              cursor: 'pointer', 
              overflow: 'hidden' 
            }}>
              <CardMedia
                component="img"
                image={city.img}
                alt={city.name}
                sx={{ 
                  height: '100%', 
                  filter: 'brightness(0.7)', 
                  transition: '0.5s', 
                  '&:hover': { transform: 'scale(1.1)', filter: 'brightness(0.5)' } 
                }}
              />
              <Box sx={{ 
                position: 'absolute', 
                top: 25, 
                left: 20, 
                color: '#fff',
                textShadow: '2px 2px 10px rgba(0,0,0,0.8)'
              }}>
                <Typography variant="h6" fontWeight="bold">{city.name}</Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>{city.count}</Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CitySlider;