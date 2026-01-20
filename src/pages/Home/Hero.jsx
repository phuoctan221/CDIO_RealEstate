import React from 'react';
import { Box, Typography, Container, TextField, Button, MenuItem, Paper, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Hero = () => {
  return (
    <Box sx={{ 
      height: '90vh', 
      backgroundImage: 'url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200")',
      backgroundSize: 'cover', backgroundPosition: 'center',
      display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative'
    }}>
      <Container sx={{ textAlign: 'center', mb: 8, zIndex: 1 }}>
        <Typography variant="h3" fontWeight="bold" color="white" sx={{ textShadow: '2px 2px 10px rgba(0,0,0,0.5)', mb: 2 }}>
          Khám phá một nơi bạn muốn sở hữu
        </Typography>

        {/* Thanh Search bo tròn màu trắng ở trên */}
        <Box sx={{ maxWidth: '700px', mx: 'auto', bgcolor: '#fff', borderRadius: '50px', p: 1, display: 'flex', alignItems: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>
          <TextField 
            fullWidth 
            placeholder="Nhập nơi bạn muốn tìm kiếm..." 
            variant="standard"
            InputProps={{ 
              disableUnderline: true,
              sx: { px: 3, fontSize: '1rem' }
            }}
          />
          <Button sx={{ bgcolor: '#eac075', color: '#fff', borderRadius: '50%', minWidth: '50px', height: '50px', '&:hover': { bgcolor: '#d4a85a' } }}>
            <SearchIcon />
          </Button>
        </Box>
      </Container>

      {/* VÙNG FILTER 2 HÀNG NHƯ HÌNH MẪU */}
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10 }}>
        <Paper sx={{ p: 4, borderRadius: '60px', bgcolor: 'rgba(255,255,255,0.9)', boxShadow: '0 15px 40px rgba(0,0,0,0.15)', display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
          
          {/* Hàng 1: 6 ô lọc */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1.5, width: '100%' }}>
            {['Loại tin', 'Loại BĐS', 'Tỉnh thành', 'Quận/ Huyện', 'Phường/ Xã', 'Đường/ Phố'].map((label) => (
              <TextField
                key={label}
                select
                defaultValue=""
                label={label}
                variant="outlined"
                size="small"
                sx={{ 
                  minWidth: '180px',
                  '& .MuiOutlinedInput-root': { borderRadius: '25px', bgcolor: '#fff' }
                }}
              >
                <MenuItem value="">Tất cả</MenuItem>
              </TextField>
            ))}
          </Box>

          {/* Hàng 2: Hướng, Mức giá và Nút Tìm kiếm */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1.5, alignItems: 'center', width: '100%' }}>
             <TextField
                select
                defaultValue=""
                label="Hướng"
                variant="outlined"
                size="small"
                sx={{ minWidth: '180px', '& .MuiOutlinedInput-root': { borderRadius: '25px', bgcolor: '#fff' } }}
              >
                <MenuItem value="">Tất cả</MenuItem>
              </TextField>

              <TextField
                select
                defaultValue=""
                label="Mức giá"
                variant="outlined"
                size="small"
                sx={{ minWidth: '180px', '& .MuiOutlinedInput-root': { borderRadius: '25px', bgcolor: '#fff' } }}
              >
                <MenuItem value="">Tất cả</MenuItem>
              </TextField>

              <Button 
                variant="contained" 
                sx={{ 
                  bgcolor: '#2563eb', 
                  px: 6, 
                  py: 1,
                  borderRadius: '25px', 
                  textTransform: 'none', 
                  fontWeight: 'bold',
                  boxShadow: '0 4px 14px rgba(37, 99, 235, 0.4)'
                }}
              >
                Tìm kiếm
              </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Hero;