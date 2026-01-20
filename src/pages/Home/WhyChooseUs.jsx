import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const WhyChooseUs = () => {
  const features = [
    { title: 'An Toàn Tuyệt Đối', desc: 'Mọi giao dịch đều được kiểm duyệt pháp lý chặt chẽ.', icon: <VerifiedUserIcon color="primary" sx={{ fontSize: 45 }} /> },
    { title: 'Giá Trị Tăng Trưởng', desc: 'Cung cấp các dự án có tiềm năng sinh lời cao nhất.', icon: <TrendingUpIcon color="primary" sx={{ fontSize: 45 }} /> },
    { title: 'Tài Chính Linh Hoạt', desc: 'Hỗ trợ vay vốn ngân hàng với lãi suất ưu đãi.', icon: <AccountBalanceWalletIcon color="primary" sx={{ fontSize: 45 }} /> },
  ];

  return (
    <Box sx={{ py: 10, bgcolor: '#fff' }}>
      <Container>
        <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom>
          Tại sao chọn chúng tôi?
        </Typography>
        <Grid container spacing={4} sx={{ mt: 3 }}>
          {features.map((item, index) => (
            <Grid item key={index} xs={12} md={4}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>{item.icon}</Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;