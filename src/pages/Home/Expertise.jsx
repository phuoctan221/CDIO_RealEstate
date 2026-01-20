import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const services = [
  { title: 'Môi giới BĐS', desc: 'Kết nối người mua và người bán nhanh chóng.', icon: <SearchIcon sx={{ fontSize: 40, color: '#1a4d2e' }} /> },
  { title: 'Tư vấn Đầu tư', desc: 'Phân tích thị trường chuyên sâu cho nhà đầu tư.', icon: <TrendingUpIcon sx={{ fontSize: 40, color: '#1a4d2e' }} /> },
  { title: 'Quản lý tài sản', desc: 'Tối ưu hóa lợi nhuận từ việc cho thuê và vận hành.', icon: <MapsHomeWorkIcon sx={{ fontSize: 40, color: '#1a4d2e' }} /> },
];

const Expertise = () => {
  return (
    <Box sx={{ py: 10, bgcolor: '#f9f9f9' }}>
      <Container>
        <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom sx={{ color: '#1a1a1a' }}>
          Lĩnh vực chuyên môn
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {services.map((service, index) => (
            <Grid item key={index} xs={12} md={4}>
              <Paper elevation={0} sx={{ p: 4, textAlign: 'center', borderRadius: '20px', border: '1px solid #eee', height: '100%' }}>
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>{service.icon}</Box>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 1, color: '#333' }}>{service.title}</Typography>
                <Typography variant="body2" color="text.secondary">{service.desc}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Expertise;