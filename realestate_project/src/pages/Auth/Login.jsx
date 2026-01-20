import { useState } from "react";
import { useForm } from "react-hook-form";
// Import Grid chuẩn MUI v6 (Dùng Grid size)
import { Grid, TextField, Button, Typography, Box, Paper, InputAdornment, IconButton, Checkbox, FormControlLabel } from "@mui/material";
import { Link, useNavigate } from "react-router-dom"; 

// Icon
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// Import ảnh login.jpg (Đảm bảo bạn đã có ảnh này trong thư mục assets)
import loginImg from '../../assets/login.jpg'; 

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    // Lưu token giả lập để đăng nhập thành công
    localStorage.setItem("accessToken", "token-dang-nhap-thanh-cong-123");
    navigate('/properties'); 
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#e0e0e0' }}>
      <Paper elevation={6} sx={{ width: '1000px', maxWidth: '90%', borderRadius: '12px', overflow: 'hidden', display: 'flex', minHeight: '600px' }}>
        <Grid container sx={{ width: '100%' }}>
          
          {/* CỘT TRÁI: ẢNH MINH HỌA */}
          <Grid size={{ xs: 12, md: 7 }} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5', p: 4 }}>
            <Box 
              component="img" 
              src={loginImg} 
              alt="Login Illustration" 
              sx={{ width: '100%', maxWidth: '500px', height: 'auto', objectFit: 'contain' }} 
            />
          </Grid>

          {/* CỘT PHẢI: FORM ĐĂNG NHẬP */}
          <Grid size={{ xs: 12, md: 5 }} sx={{ p: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#ffffff' }}>
            <Typography component="h1" variant="h4" sx={{ fontWeight: '900', color: '#1a4d2e', mb: 4, textAlign: 'center' }}>
              Đăng nhập
            </Typography>

            <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
              
              {/* Input Tài Khoản */}
              <Typography variant="body2" sx={{fontWeight: 'bold', mb: 1, color: '#333'}}>Tên tài khoản</Typography>
              <TextField
                fullWidth placeholder="Nhập email hoặc tên tài khoản" variant="outlined"
                {...register("email", { required: "Vui lòng nhập tên tài khoản" })}
                error={!!errors.email} helperText={errors.email?.message}
                sx={{ 
                    mb: 3, 
                    '& .MuiOutlinedInput-root': { backgroundColor: '#f3f4f6', borderRadius: '8px', '& fieldset': { border: 'none' } }, 
                    '& .MuiInputBase-input': { py: 1.5 } 
                }}
                InputProps={{ startAdornment: (<InputAdornment position="start"><EmailIcon sx={{ color: '#666' }} /></InputAdornment>) }}
              />

              {/* Input Mật Khẩu */}
              <Typography variant="body2" sx={{fontWeight: 'bold', mb: 1, color: '#333'}}>Mật khẩu</Typography>
              <TextField
                fullWidth placeholder="Nhập mật khẩu" type={showPassword ? 'text' : 'password'} variant="outlined"
                {...register("password", { required: "Vui lòng nhập mật khẩu" })}
                error={!!errors.password} helperText={errors.password?.message}
                sx={{ 
                    mb: 1, 
                    '& .MuiOutlinedInput-root': { backgroundColor: '#f3f4f6', borderRadius: '8px', '& fieldset': { border: 'none' } }, 
                    '& .MuiInputBase-input': { py: 1.5 } 
                }}
                InputProps={{
                  startAdornment: (<InputAdornment position="start"><VpnKeyIcon sx={{ color: '#666' }} /></InputAdornment>),
                  endAdornment: (<InputAdornment position="end"><IconButton onClick={handleClickShowPassword} edge="end">{showPassword ? <VisibilityOff /> : <Visibility />}</IconButton></InputAdornment>)
                }}
              />

              {/* Hàng: Nhớ mật khẩu & Quên mật khẩu */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <FormControlLabel control={<Checkbox sx={{ color: '#ccc', '&.Mui-checked': { color: '#1a4d2e' } }} />} label={<Typography variant="body2" color="text.secondary">Nhớ mật khẩu</Typography>} />
                
                <Link to="/forgot-password" style={{ color: '#6e7cfa', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>
                    Quên mật khẩu?
                </Link>
              </Box>

              {/* Nút Đăng Nhập */}
              <Button type="submit" fullWidth variant="contained" sx={{ py: 1.5, bgcolor: '#1a4d2e', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', textTransform: 'none', '&:hover': { bgcolor: '#143d23' }, boxShadow: 'none' }}>
                Đăng nhập
              </Button>

              {/* Link Đăng Ký */}
              <Box sx={{ textAlign: 'center', mt: 3 }}>
                <Typography variant="body2" color="text.secondary">
                  Bạn chưa có tài khoản?{' '} 
                  <Link to="/register" style={{ color: '#6e7cfa', textDecoration: 'none', fontWeight: 'bold' }}>
                    Đăng kí
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