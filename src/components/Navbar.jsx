import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Stack, IconButton } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar 
      position="absolute" 
      sx={{ 
        top: 20, 
        left: '2%', 
        width: '96%', 
        bgcolor: 'rgba(255,255,255,0.95)', 
        borderRadius: '50px', 
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)', 
        color: '#333',
        zIndex: 1100 
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* PHẦN CHỮ BỊ MẤT: Khôi phục lại Stack chứa menu */}
          <Stack direction="row" spacing={3} alignItems="center">
            <Typography 
              variant="h6" 
              fontWeight="bold" 
              component={Link} 
              to="/" 
              sx={{ color: '#1a4d2e', textDecoration: 'none', mr: 2 }}
            >
              LOGO
            </Typography>
            
            {/* Đây là các chữ bạn bị mất nãy giờ */}
            <Button component={Link} to="/" color="inherit" sx={{ textTransform: 'none', fontWeight: 600 }}>Trang Chủ</Button>
            <Button color="inherit" sx={{ textTransform: 'none', fontWeight: 600 }}>Nhà Đất Bán</Button>
            <Button color="inherit" sx={{ textTransform: 'none', fontWeight: 600 }}>Nhà Đất Cho Thuê</Button>
            <Button color="inherit" sx={{ textTransform: 'none', fontWeight: 600 }}>Dự Án</Button>
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="body2" sx={{ display: { xs: 'none', md: 'block' } }}>
              Liên Hệ: 0935.098.48*
            </Typography>
            <IconButton onClick={() => navigate('/login')}>
              <PersonOutlineIcon />
            </IconButton>
            
            <Button 
              variant="outlined" 
              onClick={() => navigate('/login')} 
              sx={{ 
                borderRadius: '20px', 
                textTransform: 'none', 
                borderColor: '#333', 
                color: '#333',
                px: 3,
                fontWeight: 'bold'
              }}
            >
              Đăng nhập / Đăng ký
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;