import React from 'react';
import { 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  CardMedia, 
  Box, 
  Grid, 
  Stack, 
  Divider 
} from '@mui/material';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import SquareFootOutlinedIcon from '@mui/icons-material/SquareFootOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const dummyProperties = [
  { 
    id: 1, 
    title: 'Luxury Family Home', 
    price: '$380,000', 
    address: '1020 Bloomingdale Ave',
    beds: 4, baths: 2, area: '450 sqft',
    status: 'FOR SALE',    // Trạng thái chính
    isFeatured: true,      // Trạng thái phụ (FEATURED)
    img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=600' 
  },
  { 
    id: 2, 
    title: 'Modern Apartment', 
    price: '$2,500', 
    period: '/month',
    address: '4330 Bell Shoals Rd',
    beds: 2, baths: 1, area: '850 sqft',
    status: 'FOR RENT',
    isFeatured: false,
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600' 
  },
  { 
    id: 3, 
    title: 'Sunset Villa', 
    price: '$580,000', 
    address: '9991 Sunshine Blvd',
    beds: 5, baths: 3, area: '1200 sqft',
    status: 'FOR SALE',
    isFeatured: true,
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600' 
  }
];

const Featured = () => {
  // Hàm xử lý màu sắc cho từng trạng thái
  const getStatusColor = (status) => {
    switch (status) {
      case 'FOR SALE': return '#1a4d2e'; // Xanh đậm
      case 'FOR RENT': return '#2563eb'; // Xanh dương
      default: return '#333';
    }
  };

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 6 }}>
        Bất Động Sản Nổi Bật
      </Typography>
      
      <Grid container spacing={4}>
        {dummyProperties.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Card sx={{ 
              borderRadius: '25px', 
              overflow: 'hidden', 
              bgcolor: '#fff', 
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              transition: '0.3s',
              '&:hover': { transform: 'translateY(-5px)' }
            }}>
              
              <Box sx={{ position: 'relative' }}>
                <CardMedia component="img" height="260" image={item.img} />
                
                {/* HIỂN THỊ CÁC TRẠNG THÁI (TAGS) */}
                <Stack 
                  direction="row" 
                  spacing={1} 
                  sx={{ position: 'absolute', top: 20, left: 20, zIndex: 2 }}
                >
                  {/* Tag Trạng thái (Sale/Rent) */}
                  <Box sx={{ 
                    bgcolor: getStatusColor(item.status),
                    color: 'white', px: 1.5, py: 0.5, borderRadius: '6px', 
                    fontSize: '10px', fontWeight: 'bold' 
                  }}>
                    {item.status}
                  </Box>

                  {/* Tag FEATURED (nếu có) */}
                  {item.isFeatured && (
                    <Box sx={{ 
                      bgcolor: '#eac075', // Màu vàng đồng
                      color: 'white', px: 1.5, py: 0.5, borderRadius: '6px', 
                      fontSize: '10px', fontWeight: 'bold' 
                    }}>
                      FEATURED
                    </Box>
                  )}
                </Stack>
              </Box>
              
              <CardContent sx={{ p: 0 }}>
                <Box sx={{ p: 3, pb: 2 }}>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="h6" fontWeight="bold" sx={{ fontSize: '1.1rem' }}>{item.title}</Typography>
                    <Typography variant="h6" sx={{ color: '#ff6b6b', fontWeight: 'bold' }}>
                      {item.price}{item.period}
                    </Typography>
                  </Stack>

                  <Stack direction="row" spacing={1} alignItems="center" sx={{ color: 'text.secondary', mt: 1 }}>
                    <LocationOnOutlinedIcon sx={{ fontSize: 18 }} />
                    <Typography variant="body2">{item.address}</Typography>
                  </Stack>
                </Box>

                <Divider sx={{ mx: 2, opacity: 0.5 }} />

                <Stack direction="row" justifyContent="space-around" sx={{ p: 2, color: '#555' }}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <BedOutlinedIcon sx={{ fontSize: 20 }} />
                    <Typography variant="body2">{item.beds} Beds</Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <BathtubOutlinedIcon sx={{ fontSize: 20 }} />
                    <Typography variant="body2">{item.baths} Baths</Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <SquareFootOutlinedIcon sx={{ fontSize: 20 }} />
                    <Typography variant="body2">{item.area}</Typography>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Featured;