import { useForm } from "react-hook-form";
// Import Grid chuẩn MUI v6
import { Grid, TextField, Button, Typography, Box, Paper, InputAdornment } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

// Icon
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

// Dùng ảnh login.jpg cho đồng bộ
import registerImg from '../../assets/login.jpg'; 

const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  // Theo dõi mật khẩu để so sánh với ô nhập lại
  const password = watch("password");

  const onSubmit = (data) => {
    console.log("Register Data:", data);
    alert("Đăng ký thành công! Mời bạn đăng nhập.");
    navigate('/login'); 
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#e0e0e0' }}>
      <Paper elevation={6} sx={{ width: '1000px', maxWidth: '90%', borderRadius: '4px', overflow: 'hidden', display: 'flex', minHeight: '600px' }}>
        <Grid container sx={{ width: '100%' }}>
          
          {/* CỘT TRÁI: FORM ĐĂNG KÝ */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ p: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#ffffff' }}>
            <Typography component="h1" variant="h4" sx={{ fontWeight: '900', color: '#1a4d2e', mb: 1, textAlign: 'center' }}>
              Tạo tài khoản
            </Typography>
            <Typography variant="body2" sx={{ mb: 4, textAlign: 'center', color: 'text.secondary' }}>
              Tham gia ngay hệ thống Bất động sản số 1
            </Typography>

            <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
              
              {/* 1. Họ và Tên */}
              <TextField
                fullWidth placeholder="Họ và tên" variant="outlined"
                {...register("fullName", { required: "Vui lòng nhập họ tên" })}
                error={!!errors.fullName} helperText={errors.fullName?.message}
                sx={{ mb: 2, '& .MuiOutlinedInput-root': { backgroundColor: '#f0f2f5', borderRadius: '8px', '& fieldset': { border: 'none' } } }}
                InputProps={{ startAdornment: (<InputAdornment position="start"><PersonIcon sx={{ color: 'gray' }} /></InputAdornment>) }}
              />

              {/* 2. Email */}
              <TextField
                fullWidth placeholder="Địa chỉ Email" variant="outlined"
                {...register("email", { 
                  required: "Vui lòng nhập email",
                  pattern: { value: /^\S+@\S+$/i, message: "Email không hợp lệ" }
                })}
                error={!!errors.email} helperText={errors.email?.message}
                sx={{ mb: 2, '& .MuiOutlinedInput-root': { backgroundColor: '#f0f2f5', borderRadius: '8px', '& fieldset': { border: 'none' } } }}
                InputProps={{ startAdornment: (<InputAdornment position="start"><EmailIcon sx={{ color: 'gray' }} /></InputAdornment>) }}
              />

              {/* 3. Số điện thoại */}
              <TextField
                fullWidth placeholder="Số điện thoại" variant="outlined"
                {...register("phone", { 
                  required: "Vui lòng nhập SĐT",
                  pattern: { value: /^[0-9]{10}$/, message: "SĐT phải có 10 số" }
                })}
                error={!!errors.phone} helperText={errors.phone?.message}
                sx={{ mb: 2, '& .MuiOutlinedInput-root': { backgroundColor: '#f0f2f5', borderRadius: '8px', '& fieldset': { border: 'none' } } }}
                InputProps={{ startAdornment: (<InputAdornment position="start"><PhoneIcon sx={{ color: 'gray' }} /></InputAdornment>) }}
              />

              {/* 4. Mật khẩu */}
              <TextField
                fullWidth placeholder="Mật khẩu" type="password" variant="outlined"
                {...register("password", { required: "Vui lòng nhập mật khẩu", minLength: { value: 6, message: "Tối thiểu 6 ký tự" } })}
                error={!!errors.password} helperText={errors.password?.message}
                sx={{ mb: 2, '& .MuiOutlinedInput-root': { backgroundColor: '#f0f2f5', borderRadius: '8px', '& fieldset': { border: 'none' } } }}
                InputProps={{ startAdornment: (<InputAdornment position="start"><VpnKeyIcon sx={{ color: 'gray' }} /></InputAdornment>) }}
              />

              {/* 5. Nhập lại Mật khẩu */}
              <TextField
                fullWidth placeholder="Nhập lại mật khẩu" type="password" variant="outlined"
                {...register("confirmPassword", { 
                  validate: value => value === password || "Mật khẩu không khớp"
                })}
                error={!!errors.confirmPassword} helperText={errors.confirmPassword?.message}
                sx={{ mb: 3, '& .MuiOutlinedInput-root': { backgroundColor: '#f0f2f5', borderRadius: '8px', '& fieldset': { border: 'none' } } }}
                InputProps={{ startAdornment: (<InputAdornment position="start"><VpnKeyIcon sx={{ color: 'gray' }} /></InputAdornment>) }}
              />

              <Button type="submit" fullWidth variant="contained" sx={{ py: 1.5, bgcolor: '#1a4d2e', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', textTransform: 'none', '&:hover': { bgcolor: '#143d23' } }}>
                Đăng ký tài khoản
              </Button>

              <Box sx={{ textAlign: 'center', mt: 3 }}>
                <Typography variant="body2" color="text.secondary">
                  Đã có tài khoản?{' '} <Link to="/login" style={{ color: '#6e7cfa', textDecoration: 'none', fontWeight: 'bold' }}>Đăng nhập ngay</Link>
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* CỘT PHẢI: ẢNH MINH HỌA */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5', p: 4 }}>
            <Box 
              component="img" 
              src={registerImg} 
              alt="Register Illustration" 
              sx={{ width: '100%', maxWidth: '600px', height: 'auto', objectFit: 'contain' }} 
            />
          </Grid>

        </Grid>
      </Paper>
    </Box>
  );
};

export default Register;