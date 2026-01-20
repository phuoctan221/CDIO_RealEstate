import React from 'react';
import { 
  Box, Container, Typography, Button, TextField, InputAdornment, 
  AppBar, Toolbar, Select, MenuItem, Paper, IconButton, Avatar, Chip, Divider
} from '@mui/material';
import Grid from '@mui/material/Grid';

// Icons
import SearchIcon from '@mui/icons-material/Search';
import PhoneIcon from '@mui/icons-material/Phone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const PropertyList = () => {
  return (
    <Box sx={{ bgcolor: '#fff', overflowX: 'hidden' }}>
      
      {/* --- SECTION 1: NAVBAR & HERO --- */}
      <Box sx={{ 
        height: '750px', 
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600")', 
        backgroundSize: 'cover', backgroundPosition: 'center',
        position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center'
      }}>
        {/* Header bo cong trắng */}
        <AppBar position="absolute" elevation={0} sx={{ bgcolor: 'rgba(255,255,255,0.95)', m: 2, width: 'calc(100% - 40px)', borderRadius: '50px', left: 0, top: 0 }}>
          <Toolbar sx={{ justifyContent: 'space-between', px: 4 }}>
            <Box sx={{ display: 'flex', gap: 3 }}>
              {['Trang Chủ', 'Nhà Đất Bán', 'Nhà Đất Cho Thuê', 'Dự Án'].map((item) => (
                <Typography key={item} sx={{ color: '#333', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.85rem' }}>{item}</Typography>
              ))}
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Typography sx={{ display: 'flex', alignItems: 'center', gap: 0.5, fontWeight: 'bold', fontSize: '0.85rem', color: '#333' }}>
                <PhoneIcon fontSize="small" /> 0935.262.421
              </Typography>
              <Button variant="outlined" sx={{ borderRadius: '20px', textTransform: 'none', fontWeight: 'bold', color: '#333', borderColor: '#ccc' }}>Đăng nhập / Đăng ký</Button>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Hero Text & Search Bar */}
        <Container sx={{ mt: 25, textAlign: 'center', color: '#fff', zIndex: 1 }}>
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 4 }}>Khám phá một nơi<br />bạn muốn sở hữu</Typography>
          
          <Paper elevation={4} sx={{ p: 2, borderRadius: '100px', maxWidth: '1000px', mx: 'auto', bgcolor: 'rgba(255,255,255,0.97)' }}>
             <TextField fullWidth placeholder="Nhập nơi bạn muốn tìm kiếm..." variant="standard" 
               InputProps={{ disableUnderline: true, endAdornment: <IconButton sx={{bgcolor: '#efd688'}}><SearchIcon/></IconButton> }} 
               sx={{ px: 4, py: 1 }}
             />
             <Divider sx={{ my: 1 }} />
             <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1, pb: 1 }}>
                {['Loại tin', 'Loại BĐS', 'Tỉnh thành', 'Quận/Huyện', 'Hướng', 'Mức giá'].map((f) => (
                  <Select key={f} displayEmpty value="" variant="standard" disableUnderline sx={{ minWidth: 110, fontSize: '0.75rem', border: '1px solid #eee', borderRadius: '20px', px: 2 }}>
                    <MenuItem value="">{f}</MenuItem>
                  </Select>
                ))}
                <Button variant="contained" sx={{ bgcolor: '#3366ff', borderRadius: '50px', px: 5, fontWeight: 'bold' }}>Tìm kiếm</Button>
             </Box>
          </Paper>
        </Container>
      </Box>

      {/* --- SECTION 2: BẤT ĐỘNG SẢN NỔI BẬT --- */}
      <Container sx={{ py: 10 }}>
        <Typography variant="h4" textAlign="center" fontWeight="bold" mb={6}>Bất Động Sản Nổi Bật</Typography>
        <Grid container spacing={3}>
          {[1, 2, 3].map((i) => (
            <Grid key={i} size={{ xs: 12, md: 4 }}>
              <Paper elevation={0} sx={{ borderRadius: '15px', overflow: 'hidden', border: '1px solid #eee' }}>
                <Box sx={{ position: 'relative', height: 240, overflow: 'hidden' }}>
                  <img src={`https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=${i}`} alt="" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                  <Chip label="ĐANG BÁN" size="small" sx={{ position: 'absolute', top: 15, left: 15, bgcolor: '#1a4d2e', color: '#fff', borderRadius: '4px' }} />
                </Box>
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" fontWeight="bold">Biệt thự view hồ {i}</Typography>
                  <Typography variant="body2" color="text.secondary" mb={2}>1020 Bloomingdale Ave, Hà Nội</Typography>
                  <Typography variant="h6" color="error" fontWeight="bold" mb={2}>10 tỷ</Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: 2, borderTop: '1px solid #eee' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, fontSize: '0.8rem' }}><BedIcon fontSize="small"/> 4</Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, fontSize: '0.8rem' }}><BathtubIcon fontSize="small"/> 2</Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, fontSize: '0.8rem' }}><SquareFootIcon fontSize="small"/> 150m2</Box>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* --- SECTION 3: KHÁM PHÁ THÀNH PHỐ (Grid ảnh) --- */}
      <Container sx={{ py: 5 }}>
        <Typography variant="h5" textAlign="center" fontWeight="bold" mb={4}>Thông tin về bất động sản các thành phố</Typography>
        <Grid container spacing={2}>
           {['Hà Nội', 'TP. HCM', 'Đà Nẵng', 'Đà Lạt', 'Vũng Tàu', 'Nha Trang'].map((city, idx) => (
             <Grid key={idx} size={{ xs: 6, md: idx < 3 ? 4 : 4 }}>
               <Box sx={{ position: 'relative', height: 200, borderRadius: '12px', overflow: 'hidden', cursor: 'pointer' }}>
                  <img src={`https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=500&sig=${idx}`} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                  <Box sx={{ position: 'absolute', bottom: 15, left: 15, color: '#fff', fontWeight: 'bold' }}>{city}</Box>
               </Box>
             </Grid>
           ))}
        </Grid>
      </Container>

      {/* --- SECTION 4: TẠI SAO CHỌN CHÚNG TÔI (Màu vàng) --- */}
      <Box sx={{ bgcolor: '#efd688', py: 10, mt: 10 }}>
        <Container textAlign="center">
          <Typography variant="h5" fontWeight="bold" mb={6}>Tại sao phải chọn chúng tôi</Typography>
          <Grid container spacing={4}>
            {[
              { t: 'Mạng lưới rộng', d: 'Phủ khắp các tỉnh thành.' },
              { t: 'Tư vấn tận tâm', d: 'Hỗ trợ khách hàng 24/7.' },
              { t: 'Pháp lý an toàn', d: 'Tin đăng được kiểm duyệt.' },
              { t: 'Giao dịch nhanh', d: 'Hỗ trợ thủ tục trọn gói.' }
            ].map((item, idx) => (
              <Grid key={idx} size={{ xs: 12, md: 3 }}>
                <Typography variant="h6" fontWeight="bold">{item.t}</Typography>
                <Typography variant="body2">{item.d}</Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* --- SECTION 5: LOCAL EXPERTISE (Màu xanh đậm) --- */}
      <Box sx={{ bgcolor: '#1a4d2e', color: '#fff', py: 12 }}>
        <Container>
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ position: 'relative' }}>
                <img src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800" style={{width: '100%', borderRadius: '20px'}} />
                <Paper sx={{ position: 'absolute', top: -20, left: -20, p: 2, borderRadius: '12px' }}>
                  <Typography variant="caption" color="text.secondary">Giao dịch mới</Typography>
                  <Typography variant="subtitle2" fontWeight="bold" color="#1a4d2e">12.5 Tỷ VNĐ</Typography>
                </Paper>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography variant="h4" fontWeight="bold" mb={3}>Local expertise for luxury homes</Typography>
              <Typography variant="body1" sx={{ opacity: 0.8, mb: 4, lineHeight: 1.8 }}>
                Chúng tôi hiểu rõ thị trường địa phương để mang đến cho bạn những lựa chọn tốt nhất. Với đội ngũ chuyên gia giàu kinh nghiệm, mọi giấc mơ về ngôi nhà lý tưởng sẽ thành hiện thực.
              </Typography>
              <Grid container spacing={4}>
                <Grid size={{ xs: 6, sm: 3 }}><Typography variant="h4" fontWeight="bold">15.8M</Typography><Typography variant="caption">Khách hàng</Typography></Grid>
                <Grid size={{ xs: 6, sm: 3 }}><Typography variant="h4" fontWeight="bold">25K</Typography><Typography variant="caption">Giao dịch</Typography></Grid>
                <Grid size={{ xs: 6, sm: 3 }}><Typography variant="h4" fontWeight="bold">150</Typography><Typography variant="caption">Giải thưởng</Typography></Grid>
                <Grid size={{ xs: 6, sm: 3 }}><Typography variant="h4" fontWeight="bold">600</Typography><Typography variant="caption">Chuyên gia</Typography></Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* --- SECTION 6: TESTIMONIALS --- */}
      <Container sx={{ py: 10, textAlign: 'center' }}>
        <Typography variant="h5" fontWeight="bold" mb={6}>Khách hàng nói gì về chúng tôi?</Typography>
        <Paper elevation={0} sx={{ p: 4, bgcolor: '#f9f9f9', borderRadius: '20px', maxWidth: '800px', mx: 'auto', position: 'relative' }}>
          <FormatQuoteIcon sx={{ fontSize: 60, color: '#efd688', opacity: 0.5, position: 'absolute', top: 10, left: 10 }} />
          <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 3 }}>
            "Dịch vụ tuyệt vời, tôi đã tìm được căn hộ ưng ý chỉ trong 1 tuần nhờ sự hỗ trợ nhiệt tình của đội ngũ RETM."
          </Typography>
          <Avatar src="https://i.pravatar.cc/150?img=5" sx={{ mx: 'auto', mb: 1 }} />
          <Typography fontWeight="bold">Nguyễn Phương Thảo</Typography>
          <Typography variant="caption" color="text.secondary">Nhà đầu tư</Typography>
        </Paper>
      </Container>

      {/* --- FOOTER (Đen) --- */}
      <Box sx={{ bgcolor: '#111', color: '#888', py: 8 }}>
        <Container>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography color="#fff" fontWeight="bold" mb={2}>RETM SYSTEM</Typography>
              <Typography variant="body2">Hòa Hải, Ngũ Hành Sơn, Đà Nẵng</Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography color="#fff" fontWeight="bold" mb={2}>LIÊN HỆ</Typography>
              <Typography variant="body2">Hotline: 0935.262.421</Typography>
              <Typography variant="body2">Email: support@retm.vn</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

    </Box>
  );
};

export default PropertyList;