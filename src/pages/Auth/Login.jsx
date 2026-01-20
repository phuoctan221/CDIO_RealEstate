import { useState } from "react";
import { useForm } from "react-hook-form";
// FIX: Import Grid trực tiếp từ @mui/material để tránh lỗi resolve Grid2
import { Grid, TextField, Button, Typography, Box, Paper, InputAdornment, IconButton, Checkbox, FormControlLabel } from "@mui/material";
import { Link, useNavigate } from "react-router-dom"; 

// Icon
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import loginImg from '../../assets/login.jpg'; 

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    localStorage.setItem("accessToken", "token-dang-nhap-thanh-cong-123");
    navigate('/'); // Sau khi login thì nên về Trang chủ
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f2f5' }}>
      <Paper elevation={6} sx={{ width: '1000px', maxWidth: '95%', borderRadius: '20px', overflow: 'hidden', display: 'flex', minHeight: '600px' }}>
        <Grid container sx={{ width: '100%' }}>
          
          {/* CỘT TRÁI: ẢNH MINH HỌA */}
          <Grid item xs={12} md={7} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5', p: 4 }}>
            <Box 
              component="img" 
              src={loginImg} 
              alt="Login Illustration" 
              sx={{ width: '100%', maxWidth: '450px', height: 'auto', objectFit: 'contain' }} 
            />
          </Grid>

          {/* CỘT PHẢI: FORM ĐĂNG NHẬP */}
          <Grid item xs={12} md={5} sx={{ p: { xs: 3, md: 5 }, display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#ffffff' }}>
            <Typography component="h1" variant="h4" sx={{ fontWeight: '900', color: '#1a4d2e', mb: 1, textAlign: 'center' }}>
              Đăng nhập
            </Typography>
            <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ mb: 4 }}>
              Hệ thống quản lý giao dịch BĐS
            </Typography>

            <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
              <Typography variant="body2" sx={{fontWeight: 'bold', mb: 1, color: '#333'}}>Tên tài khoản</Typography>
              <TextField
                fullWidth placeholder="Nhập email hoặc tên tài khoản" variant="outlined"
                {...register("email", { required: "Vui lòng nhập tên tài khoản" })}
                error={!!errors.email} helperText={errors.email?.message}
                sx={{ 
                    mb: 2, 
                    '& .MuiOutlinedInput-root': { backgroundColor: '#f3f4f6', borderRadius: '12px', '& fieldset': { border: 'none' } }
                }}
                InputProps={{ startAdornment: (<InputAdornment position="start"><EmailIcon sx={{ color: '#666' }} /></InputAdornment>) }}
              />

              <Typography variant="body2" sx={{fontWeight: 'bold', mb: 1, color: '#333'}}>Mật khẩu</Typography>
              <TextField
                fullWidth placeholder="Nhập mật khẩu" type={showPassword ? 'text' : 'password'} variant="outlined"
                {...register("password", { required: "Vui lòng nhập mật khẩu" })}
                error={!!errors.password} helperText={errors.password?.message}
                sx={{ 
                    mb: 1, 
                    '& .MuiOutlinedInput-root': { backgroundColor: '#f3f4f6', borderRadius: '12px', '& fieldset': { border: 'none' } }
                }}
                InputProps={{
                  startAdornment: (<InputAdornment position="start"><VpnKeyIcon sx={{ color: '#666' }} /></InputAdornment>),
                  endAdornment: (<InputAdornment position="end"><IconButton onClick={handleClickShowPassword} edge="end">{showPassword ? <VisibilityOff /> : <Visibility />}</IconButton></InputAdornment>)
                }}
              />

              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <FormControlLabel control={<Checkbox sx={{ color: '#ccc', '&.Mui-checked': { color: '#1a4d2e' } }} />} label={<Typography variant="body2" color="text.secondary">Nhớ mật khẩu</Typography>} />
                <Link to="/forgot-password" style={{ color: '#1a4d2e', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 600 }}>
                    Quên mật khẩu?
                </Link>
              </Box>

              <Button type="submit" fullWidth variant="contained" sx={{ py: 1.5, bgcolor: '#1a4d2e', borderRadius: '12px', fontSize: '16px', fontWeight: 'bold', textTransform: 'none', '&:hover': { bgcolor: '#143d23' }, boxShadow: '0 4px 12px rgba(26, 77, 46, 0.2)' }}>
                Đăng nhập
              </Button>

              <Box sx={{ textAlign: 'center', mt: 3 }}>
                <Typography variant="body2" color="text.secondary">
                  Bạn chưa có tài khoản?{' '} 
                  <Link to="/register" style={{ color: '#1a4d2e', textDecoration: 'none', fontWeight: 'bold' }}>
                    Đăng ký ngay
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Login;