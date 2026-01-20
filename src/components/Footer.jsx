import React from 'react';
import { Box, Container, Grid, Typography, Stack, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#111', color: '#fff', py: 8, mt: 5 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" sx={{ color: '#eac075', mb: 2 }}>LOGO</Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              Hệ thống quản lý giao dịch bất động sản hàng đầu. <br />
              Đồ án CDIO - CMU-CS 447.
            </Typography>
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>Liên Kết</Typography>
            <Stack spacing={1}>
              <Link href="#" color="inherit" underline="none" sx={{ opacity: 0.7 }}>Trang chủ</Link>
              <Link href="#" color="inherit" underline="none" sx={{ opacity: 0.7 }}>Dự án</Link>
              <Link href="#" color="inherit" underline="none" sx={{ opacity: 0.7 }}>Liên hệ</Link>
            </Stack>
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>Thông Tin</Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>Địa chỉ: 254 Nguyễn Văn Linh, Đà Nẵng</Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>Email: info@duytan.edu.vn</Typography>
          </Grid>
        </Grid>
        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', mt: 5, pt: 3, textAlign: 'center' }}>
          <Typography variant="caption" sx={{ opacity: 0.5 }}>
            © 2026 Duy Tan University - CDIO Project. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;