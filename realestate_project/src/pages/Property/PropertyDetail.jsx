import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Button, Paper, Chip, Divider, Avatar, Rating } from '@mui/material';
import Grid from '@mui/material/Grid'; // Grid chuẩn MUI v6

// Icons
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Dữ liệu giả chi tiết (Mock Data)
const propertyData = {
  id: 1,
  title: "Biệt thự Vinhomes Riverside View Sông Đẳng Cấp",
  address: "Khu Bằng Lăng, Vinhomes Riverside, Long Biên, Hà Nội",
  price: 25000000000,
  priceText: "25 Tỷ",
  status: "Đang bán",
  type: "Biệt thự",
  description: `Cần bán gấp biệt thự đơn lập view sông cực đẹp tại khu Bằng Lăng, Vinhomes Riverside. 
  
  - Nhà đã hoàn thiện nội thất cao cấp nhập khẩu từ Ý, thiết kế theo phong cách Tân Cổ Điển sang trọng. 
  - Sân vườn rộng rãi, tiểu cảnh hồ cá Koi, không gian thoáng đãng.
  - Khu vực an ninh tốt 24/7, cộng đồng cư dân tinh hoa.
  - Tiện ích đầy đủ: Trường học quốc tế, TTTM Vincom, sân Golf, bể bơi vô cực...
  
  Sổ đỏ chính chủ, pháp lý rõ ràng, sang tên ngay trong ngày.`,
  specs: {
    bedrooms: 5,
    bathrooms: 6,
    area: "350m²",
    direction: "Đông Nam",
    floor: 3
  },
  images: [
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200", // Ảnh chính
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?w=600",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600"
  ],
  agent: {
    name: "Trần Văn Phúc",
    role: "Chuyên viên tư vấn cao cấp",
    phone: "0912.345.678",
    email: "phuc.tran@retm.vn",
    avatar: "https://i.pravatar.cc/150?img=11"
  }
};

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = propertyData; // Thực tế sẽ gọi API theo ID

  return (
    <Box sx={{ bgcolor: '#f9f9f9', minHeight: '100vh', pb: 8 }}>
      
      {/* 1. HEADER ẢNH (Image Gallery) */}
      <Box sx={{ height: { xs: '300px', md: '500px' }, position: 'relative', bgcolor: '#000' }}>
         <Box 
            component="img" 
            src={property.images[0]} 
            sx={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} 
         />
         <Container sx={{ position: 'absolute', top: 20, left: 0, right: 0 }}>
             <Button 
                startIcon={<ArrowBackIcon />} 
                onClick={() => navigate('/properties')}
                variant="contained"
                sx={{ bgcolor: 'rgba(255,255,255,0.9)', color: '#333', '&:hover': { bgcolor: '#fff' }, fontWeight: 'bold' }}
             >
                Quay lại
             </Button>
         </Container>
         {/* Grid ảnh nhỏ bên góc phải (Demo) */}
         <Box sx={{ position: 'absolute', bottom: 20, right: { xs: 20, md: 100 }, display: { xs: 'none', md: 'flex' }, gap: 1 }}>
             {property.images.slice(1).map((img, i) => (
                 <Box key={i} component="img" src={img} sx={{ width: 100, height: 70, borderRadius: 2, border: '2px solid white', objectFit: 'cover', cursor: 'pointer' }} />
             ))}
             <Box sx={{ width: 100, height: 70, borderRadius: 2, bgcolor: 'rgba(0,0,0,0.7)', border: '2px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>
                 +5 ảnh
             </Box>
         </Box>
      </Box>

      {/* 2. NỘI DUNG CHÍNH */}
      <Container sx={{ mt: -5, position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4}>
            
            {/* CỘT TRÁI: THÔNG TIN CHI TIẾT */}
            <Grid size={{ xs: 12, md: 8 }}>
                <Paper elevation={3} sx={{ p: 4, borderRadius: '16px', mb: 4 }}>
                    <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
                        <Chip label={property.status} color="success" sx={{ fontWeight: 'bold' }} />
                        <Typography variant="h6" color="#1a4d2e" fontWeight="bold">
                             {property.priceText}
                        </Typography>
                    </Box>

                    <Typography variant="h4" fontWeight="800" sx={{ mb: 2, color: '#222' }}>
                        {property.title}
                    </Typography>

                    <Box display="flex" alignItems="center" mb={3} color="text.secondary">
                        <LocationOnIcon sx={{ mr: 1, color: '#1a4d2e' }} />
                        <Typography variant="body1">{property.address}</Typography>
                    </Box>

                    <Divider sx={{ mb: 3 }} />

                    {/* Thông số kỹ thuật */}
                    <Grid container spacing={2} sx={{ mb: 4 }}>
                         {[
                             { icon: <BedIcon />, label: "Phòng ngủ", val: property.specs.bedrooms },
                             { icon: <BathtubIcon />, label: "Phòng tắm", val: property.specs.bathrooms },
                             { icon: <SquareFootIcon />, label: "Diện tích", val: property.specs.area },
                             { icon: <CheckCircleIcon />, label: "Hướng", val: property.specs.direction },
                         ].map((item, index) => (
                             <Grid key={index} size={{ xs: 6, sm: 3 }}>
                                 <Box sx={{ textAlign: 'center', p: 2, bgcolor: '#f5f5f5', borderRadius: '12px' }}>
                                     <Box sx={{ color: '#1a4d2e', mb: 1 }}>{item.icon}</Box>
                                     <Typography variant="body2" color="text.secondary">{item.label}</Typography>
                                     <Typography variant="h6" fontWeight="bold">{item.val}</Typography>
                                 </Box>
                             </Grid>
                         ))}
                    </Grid>

                    <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>Mô tả chi tiết</Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ whiteSpace: 'pre-line', lineHeight: 1.8, mb: 4 }}>
                        {property.description}
                    </Typography>

                    <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>Tiện ích & Đặc điểm</Typography>
                    <Grid container spacing={1}>
                        {['Sân vườn', 'Hồ bơi', 'Gara ô tô', 'Sân thượng', 'An ninh 24/7', 'Gym & Spa', 'Gần trường học'].map((tag) => (
                            <Grid key={tag} size="auto">
                                <Chip label={tag} icon={<CheckCircleIcon style={{fontSize: 16}} />} sx={{ bgcolor: '#e8f5e9', color: '#1a4d2e', fontWeight: 500 }} />
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
            </Grid>

            {/* CỘT PHẢI: FORM LIÊN HỆ & MÔI GIỚI (Sticky) */}
            <Grid size={{ xs: 12, md: 4 }}>
                <Box sx={{ position: 'sticky', top: 20 }}>
                    <Paper elevation={4} sx={{ p: 3, borderRadius: '16px', bgcolor: '#fff' }}>
                        <Typography variant="h6" fontWeight="bold" mb={3}>Liên hệ tư vấn</Typography>
                        
                        <Box display="flex" alignItems="center" gap={2} mb={3}>
                            <Avatar src={property.agent.avatar} sx={{ width: 64, height: 64 }} />
                            <Box>
                                <Typography variant="subtitle1" fontWeight="bold">{property.agent.name}</Typography>
                                <Typography variant="body2" color="text.secondary">{property.agent.role}</Typography>
                                <Rating value={5} readOnly size="small" sx={{ mt: 0.5 }} />
                            </Box>
                        </Box>

                        <Button fullWidth variant="contained" startIcon={<PhoneIcon />} sx={{ mb: 2, bgcolor: '#1a4d2e', py: 1.5, fontWeight: 'bold', '&:hover': { bgcolor: '#143d23' } }}>
                            {property.agent.phone}
                        </Button>
                        <Button fullWidth variant="outlined" startIcon={<EmailIcon />} sx={{ color: '#1a4d2e', borderColor: '#1a4d2e', py: 1.5, fontWeight: 'bold' }}>
                            Gửi Email
                        </Button>

                        <Divider sx={{ my: 3 }}>Hoặc</Divider>

                        <Typography variant="body2" mb={1} fontWeight="bold">Để lại thông tin của bạn:</Typography>
                        <Box component="form" display="flex" flexDirection="column" gap={2}>
                            <input type="text" placeholder="Họ và tên" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none' }} />
                            <input type="text" placeholder="Số điện thoại" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none' }} />
                            <textarea rows={3} placeholder="Lời nhắn (Ví dụ: Tôi muốn xem nhà này...)" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none', resize: 'none' }}></textarea>
                            <Button fullWidth variant="contained" sx={{ bgcolor: '#d32f2f', '&:hover': { bgcolor: '#b71c1c' }, fontWeight: 'bold' }}>
                                Gửi yêu cầu ngay
                            </Button>
                        </Box>
                    </Paper>
                </Box>
            </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default PropertyDetail;