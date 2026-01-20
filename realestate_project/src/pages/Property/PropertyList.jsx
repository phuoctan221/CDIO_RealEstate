import { useState } from 'react'; // 1. Import useState
import { Container, AppBar, Toolbar, Typography, Button, Box, TextField, InputAdornment } from '@mui/material';
import Grid from '@mui/material/Grid'; 
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'; // Icon mặt buồn khi không tìm thấy

import { useNavigate } from 'react-router-dom';
import PropertyCard from '../../components/PropertyCard';

// Dữ liệu giả
const mockData = [
  { id: 1, title: "Biệt thự Vinhome Riverside", address: "Long Biên, Hà Nội", price: 25000000000, status: "Đang bán", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600" },
  { id: 2, title: "Căn hộ chung cư cao cấp", address: "Quận 1, TP.HCM", price: 5500000000, status: "Đang bán", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600" },
  { id: 3, title: "Nhà phố mặt tiền Đà Nẵng", address: "Hải Châu, Đà Nẵng", price: 12000000000, status: "Đang thuê", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600" },
  { id: 4, title: "Biệt thự nghỉ dưỡng Đà Lạt", address: "Phường 3, Đà Lạt", price: 18000000000, status: "Đang bán", image: "https://images.unsplash.com/photo-1600596542815-2a4d9fdd4070?w=600" },
  { id: 5, title: "Penthouse View Biển", address: "Nha Trang, Khánh Hòa", price: 9000000000, status: "Đang bán", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600" },
  { id: 6, title: "Nhà vườn Ecopark", address: "Văn Giang, Hưng Yên", price: 7500000000, status: "Đang bán", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?w=600" }
];

const PropertyList = () => {
  const navigate = useNavigate();
  
  // 2. Tạo biến lưu từ khóa tìm kiếm
  const [searchTerm, setSearchTerm] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate('/login');
  };

  // 3. Logic lọc dữ liệu (Realtime Search)
  // Chuyển tất cả về chữ thường (toLowerCase) để tìm kiếm không phân biệt hoa thường
  const filteredData = mockData.filter((item) => {
    const term = searchTerm.toLowerCase();
    return (
      item.title.toLowerCase().includes(term) ||    // Tìm theo tên
      item.address.toLowerCase().includes(term)     // Tìm theo địa chỉ
    );
  });

  return (
    <Box sx={{ flexGrow: 1, bgcolor: '#f4f6f8', minHeight: '100vh' }}>
      
      <AppBar position="static" sx={{ bgcolor: '#1a4d2e', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <Toolbar>
          <HomeIcon sx={{ mr: 1 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', letterSpacing: '1px' }}>
            RETM SYSTEM
          </Typography>
          <Button color="inherit" startIcon={<LogoutIcon />} onClick={handleLogout} sx={{ fontWeight: 'bold' }}>
            Đăng Xuất
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ py: 5 }}>
        
        {/* Header & Thanh tìm kiếm */}
        <Box sx={{ mb: 5, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Box>
            <Typography variant="h4" component="h2" sx={{ fontWeight: '800', color: '#1a4d2e' }}>
              Khám phá Bất Động Sản
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Tìm kiếm ngôi nhà mơ ước của bạn ngay hôm nay
            </Typography>
          </Box>
          
          <TextField 
            placeholder="Tìm theo tên hoặc địa chỉ..." 
            variant="outlined"
            size="small"
            // 4. Gắn biến searchTerm vào ô input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ 
              bgcolor: 'white', 
              width: { xs: '100%', md: '350px' },
              '& .MuiOutlinedInput-root': { borderRadius: '50px' },
              '& fieldset': { borderColor: 'transparent' }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        
        {/* 5. Hiển thị danh sách ĐÃ LỌC */}
        {filteredData.length > 0 ? (
          <Grid container spacing={4}>
            {filteredData.map((item) => (
              <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <PropertyCard property={item} />
              </Grid>
            ))}
          </Grid>
        ) : (
          // 6. Thông báo nếu không tìm thấy gì
          <Box sx={{ textAlign: 'center', mt: 8, color: 'text.secondary' }}>
            <SentimentDissatisfiedIcon sx={{ fontSize: 60, mb: 1, color: '#bdbdbd' }} />
            <Typography variant="h6">Không tìm thấy bất động sản nào phù hợp.</Typography>
            <Typography variant="body2">Vui lòng thử từ khóa khác (Ví dụ: Hà Nội, Đà Lạt...)</Typography>
          </Box>
        )}

      </Container>
    </Box>
  );
};

export default PropertyList;