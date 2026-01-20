import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const newsList = [
  { id: 1, title: 'Thị trường bất động sản 2026 có gì mới?', date: '20/01/2026', img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400' },
  { id: 2, title: 'Top 5 căn hộ đáng sống nhất Đà Nẵng', date: '18/01/2026', img: 'https://images.unsplash.com/photo-1460317442991-0ec239397148?auto=format&fit=crop&w=400' },
  { id: 3, title: 'Kinh nghiệm mua nhà lần đầu', date: '15/01/2026', img: 'https://images.unsplash.com/photo-1582408921715-18e7806365c1?auto=format&fit=crop&w=400' },
];

const News = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom>Tin tức & Sự kiện</Typography>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {newsList.map((item) => (
          <Grid item key={item.id} xs={12} md={4}>
            <Card sx={{ borderRadius: '12px', overflow: 'hidden', height: '100%' }}>
              <CardMedia component="img" height="180" image={item.img} alt={item.title} />
              <CardContent>
                <Typography variant="body2" color="text.secondary">{item.date}</Typography>
                <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 1 }}>{item.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default News;