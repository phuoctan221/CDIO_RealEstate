import { useForm } from "react-hook-form";
// Dùng các component của MUI chuẩn v6
import { TextField, Button, Typography, Box, Paper, IconButton } from "@mui/material";
// Icon mũi tên quay lại
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Forgot Password Data:", data);
    alert("Yêu cầu đã được gửi! Vui lòng kiểm tra email/SĐT của bạn.");
    // Sau khi gửi yêu cầu thành công thì quay lại trang login
    navigate('/login');
  };

  // Hàm xử lý khi bấm nút quay lại
  const handleBack = () => {
    navigate(-1); // Quay lại trang trước đó
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#e0e0e0' }}>
      <Paper elevation={6} sx={{ width: '500px', maxWidth: '90%', borderRadius: '12px', overflow: 'hidden', p: 4, position: 'relative' }}>
        
        {/* Nút mũi tên quay lại ở góc trên bên trái */}
        <IconButton
            onClick={handleBack}
            sx={{
                position: 'absolute',
                top: 16,
                left: 16,
                color: '#9e9e9e', 
                border: '1px solid #e0e0e0',
                padding: '8px',
                backgroundColor: 'white',
                '&:hover': { backgroundColor: '#f5f5f5' }
            }}
        >
            <ArrowBackIcon fontSize="small" />
        </IconButton>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 6 }}>
          {/* Tiêu đề */}
          <Typography component="h1" variant="h5" sx={{ fontWeight: '800', color: '#1a4d2e', mb: 4, textAlign: 'center' }}>
            Lấy lại mật khẩu
          </Typography>

          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ width: '100%' }}>
            
            {/* 1. Nhập tên tài khoản */}
            <TextField
              fullWidth
              placeholder="Nhập tên tài khoản"
              variant="outlined"
              {...register("username", { required: "Vui lòng nhập tên tài khoản" })}
              error={!!errors.username}
              helperText={errors.username?.message}
              sx={{ mb: 3, '& .MuiOutlinedInput-root': { backgroundColor: '#f0f2f5', borderRadius: '8px', '& fieldset': { border: 'none' } }, '& .MuiInputBase-input': { py: 2, px: 3 } }}
            />

            {/* 2. Nhập số điện thoại hoặc email */}
            <TextField
              fullWidth
              placeholder="Nhập số điện thoại hoặc email"
              variant="outlined"
              {...register("emailOrPhone", { 
                required: "Vui lòng nhập email hoặc SĐT"
              })}
              error={!!errors.emailOrPhone}
              helperText={errors.emailOrPhone?.message}
              sx={{ mb: 5, '& .MuiOutlinedInput-root': { backgroundColor: '#f0f2f5', borderRadius: '8px', '& fieldset': { border: 'none' } }, '& .MuiInputBase-input': { py: 2, px: 3 } }}
            />

            {/* Nút gửi yêu cầu */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                py: 1.5,
                bgcolor: '#1a4d2e', // Màu xanh rêu đậm
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 'bold',
                textTransform: 'none',
                '&:hover': { bgcolor: '#143d23' }
              }}
            >
              Lấy lại mật khẩu
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default ForgotPassword;