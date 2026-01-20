import React from 'react';
import { Container, Grid, Typography, Box, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Featured from './Home/Featured'; // Tận dụng lại component Featured bạn đã có

const Properties = () => {
  return (
    <Box sx={{ bgcolor: '#f9f9f9', minHeight: '100vh', py: 5 }}>
      <Container>
        <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
          Danh Sách Bất Động Sản
        </Typography>

        {/* Thanh tìm kiếm nhanh */}
        <Box sx={{ mb: 6, display: 'flex', justifyContent: 'center' }}>
          <TextField
            placeholder="Tìm kiếm theo khu vực, dự án..."
            sx={{ width: '100%', maxWidth: '600px', bgcolor: '#fff', borderRadius: '8px' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Hiển thị danh sách - Ở đây ta gọi lại Featured để hiện các Card mẫu */}
        <Featured />
        
        {/* Bạn có thể copy thêm một lần Featured nữa bên dưới để nhìn cho dài */}
        <Box sx={{ mt: -8 }}>
           <Featured />
        </Box>
      </Container>
    </Box>
  );
};

export default Properties;