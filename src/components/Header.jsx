import React from 'react';
import { AppBar, Toolbar, Box, Typography, Button, Container, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const navLinks = [
    { title: 'Trang Chủ', path: '/' },
    { title: 'Nhà Đất Bán', path: '/properties' },
    { title: 'Nhà Đất Cho Thuê', path: '/rent' },
    { title: 'Dự Án', path: '/projects' }
  ];

  return (
    <AppBar position="absolute" elevation={0} sx={{ bgcolor: 'transparent', mt: 3, zIndex: 1100 }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ 
          bgcolor: '#fff', 
          borderRadius: '50px', 
          px: 4, 
          display: 'flex', 
          justifyContent: 'space-between',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)' 
        }}>
          {/* Menu điều hướng sử dụng .map() để code sạch hơn */}
          <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
            {navLinks.map((link) => (
              <Typography 
                key={link.title}
                onClick={() => navigate(link.path)}
                sx={{ 
                  color: '#333', 
                  fontWeight: 600, 
                  cursor: 'pointer', 
                  fontSize: '0.85rem',
                  '&:hover': { color: '#1a4d2e' } 
                }}
              >
                {link.title}
              </Typography>
            ))}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography sx={{ color: '#333', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: 0.5 }}>
              Liên Hệ <PhoneIcon fontSize="small" /> 0935.098.48*
            </Typography>
            <IconButton size="small"><AccountCircleIcon /></IconButton>
            <Button 
              variant="outlined" 
              onClick={() => navigate('/login')}
              sx={{ 
                borderRadius: '20px', 
                textTransform: 'none', 
                color: '#333', 
                borderColor: '#ccc', 
                fontWeight: 600,
                '&:hover': { borderColor: '#1a4d2e', color: '#1a4d2e' }
              }}
            >
              Đăng nhập / Đăng ký
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;