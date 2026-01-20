import { Box, Typography, Paper, Container, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Avatar, Chip, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid';
// Icons
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import AssessmentIcon from '@mui/icons-material/Assessment';

// Dữ liệu mẫu cho Dashboard
const stats = [
  { title: "Tổng BĐS", value: "124", icon: <HomeIcon />, color: "#1a4d2e" },
  { title: "Khách hàng", value: "1,200", icon: <PeopleIcon />, color: "#efd688" },
  { title: "Giao dịch", value: "48", icon: <AssessmentIcon />, color: "#1a4d2e" },
];

const properties = [
  { id: 1, title: "Biệt thự Vinhome", price: "25 Tỷ", status: "Đang bán", type: "Biệt thự", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=100" },
  { id: 2, title: "Căn hộ Quận 1", price: "5.5 Tỷ", status: "Đã thuê", type: "Chung cư", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=100" },
  { id: 3, title: "Nhà phố Đà Nẵng", price: "12 Tỷ", status: "Chờ duyệt", type: "Nhà phố", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=100" },
];

const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex', bgcolor: '#f4f6f8', minHeight: '100vh' }}>
      
      {/* SIDEBAR (THANH MENU TRÁI) */}
      <Box sx={{ width: 260, bgcolor: '#1a4d2e', color: 'white', p: 3, display: { xs: 'none', md: 'block' } }}>
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 5 }}>RETM ADMIN</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Button fullWidth sx={{ color: 'white', justifyContent: 'flex-start', bgcolor: 'rgba(255,255,255,0.1)' }}>Bảng điều khiển</Button>
          <Button fullWidth sx={{ color: 'white', justifyContent: 'flex-start' }}>Quản lý tin đăng</Button>
          <Button fullWidth sx={{ color: 'white', justifyContent: 'flex-start' }}>Danh sách khách hàng</Button>
          <Button fullWidth sx={{ color: 'white', justifyContent: 'flex-start' }}>Cài đặt hệ thống</Button>
        </Box>
      </Box>

      {/* MAIN CONTENT */}
      <Box sx={{ flexGrow: 1, p: { xs: 2, md: 4 } }}>
        <Container maxWidth="lg">
          
          {/* Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Typography variant="h4" fontWeight="bold" color="#1a4d2e">Tổng quan hệ thống</Typography>
            <Button variant="contained" startIcon={<AddIcon />} sx={{ bgcolor: '#1a4d2e', borderRadius: '8px' }}>
              Thêm BĐS mới
            </Button>
          </Box>

          {/* Stats Cards (Thẻ thống kê) */}
          <Grid container spacing={3} sx={{ mb: 5 }}>
            {stats.map((item, index) => (
              <Grid key={index} size={{ xs: 12, sm: 4 }}>
                <Paper sx={{ p: 3, borderRadius: '12px', display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ p: 1.5, bgcolor: item.color, color: 'white', borderRadius: '12px' }}>{item.icon}</Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">{item.title}</Typography>
                    <Typography variant="h5" fontWeight="bold">{item.value}</Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {/* Table (Danh sách BĐS) */}
          <Paper sx={{ borderRadius: '16px', overflow: 'hidden' }}>
            <Box sx={{ p: 3, borderBottom: '1px solid #eee' }}>
              <Typography variant="h6" fontWeight="bold">Danh sách Bất động sản mới nhất</Typography>
            </Box>
            <TableContainer>
              <Table>
                <TableHead sx={{ bgcolor: '#fafafa' }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold' }}>Hình ảnh</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Tên dự án</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Loại</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Giá</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Trạng thái</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }} align="right">Hành động</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {properties.map((row) => (
                    <TableRow key={row.id} hover>
                      <TableCell><Avatar src={row.img} variant="rounded" sx={{ width: 50, height: 50 }} /></TableCell>
                      <TableCell sx={{ fontWeight: 500 }}>{row.title}</TableCell>
                      <TableCell>{row.type}</TableCell>
                      <TableCell color="#1a4d2e" sx={{ fontWeight: 'bold' }}>{row.price}</TableCell>
                      <TableCell>
                        <Chip 
                          label={row.status} 
                          size="small" 
                          sx={{ 
                            bgcolor: row.status === "Đang bán" ? "#e8f5e9" : "#fff3e0",
                            color: row.status === "Đang bán" ? "#2e7d32" : "#ed6c02",
                            fontWeight: 'bold'
                          }} 
                        />
                      </TableCell>
                      <TableCell align="right">
                        <IconButton size="small" color="primary"><EditIcon /></IconButton>
                        <IconButton size="small" color="error"><DeleteIcon /></IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>

        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;