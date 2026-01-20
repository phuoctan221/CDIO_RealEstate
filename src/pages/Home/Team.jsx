import React from 'react';
import { Container, Typography, Grid, Box, Avatar } from '@mui/material';

const Team = () => {
  const members = [
    { name: 'Nguyễn Thành Nam', role: 'CEO & Founder', img: 'https://i.pravatar.cc/150?u=nam' },
    { name: 'Lê Minh Anh', role: 'Trưởng phòng kinh doanh', img: 'https://i.pravatar.cc/150?u=anh' },
    { name: 'Phạm Đức Mạnh', role: 'Chuyên gia tư vấn', img: 'https://i.pravatar.cc/150?u=manh' },
  ];

  return (
    <Container sx={{ py: 10 }}>
      <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom>
        Gặp gỡ đội ngũ của chúng tôi
      </Typography>
      <Grid container spacing={4} sx={{ mt: 3 }}>
        {members.map((person, index) => (
          <Grid item key={index} xs={12} sm={4} textAlign="center">
            <Avatar 
              src={person.img} 
              sx={{ width: 140, height: 140, mx: 'auto', mb: 2, boxShadow: '0 8px 16px rgba(0,0,0,0.1)' }} 
            />
            <Typography variant="h6" fontWeight="bold">{person.name}</Typography>
            <Typography variant="body2" color="primary" fontWeight="500">{person.role}</Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Team;