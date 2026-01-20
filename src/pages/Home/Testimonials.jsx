import React from 'react';
import { Container, Typography, Box, Avatar, Stack, Rating } from '@mui/material';

const Testimonials = () => {
  return (
    <Container sx={{ py: 10 }}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={5} alignItems="center">
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            What our customers are saying?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Hàng ngàn khách hàng đã tìm được tổ ấm lý tưởng thông qua hệ thống quản lý giao dịch của chúng tôi.
          </Typography>
          <Stack direction="row" spacing={4}>
            <Box>
              <Typography variant="h4" fontWeight="bold">10m+</Typography>
              <Typography variant="body2" color="text.secondary">Happy Customers</Typography>
            </Box>
            <Box>
              <Typography variant="h4" fontWeight="bold">09+</Typography>
              <Typography variant="body2" color="text.secondary">Years Experience</Typography>
            </Box>
          </Stack>
        </Box>

        <Box sx={{ flex: 1, bgcolor: '#f5f5f5', p: 4, borderRadius: '20px', position: 'relative' }}>
          <Rating value={5} readOnly sx={{ mb: 2 }} />
          <Typography variant="h6" sx={{ fontStyle: 'italic', mb: 3 }}>
            "Dịch vụ chuyên nghiệp, thông tin minh bạch. Tôi rất hài lòng khi giao dịch bất động sản tại đây!"
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar src="https://i.pravatar.cc/150?u=1" />
            <Box>
              <Typography fontWeight="bold">Oliver Beddows</Typography>
              <Typography variant="caption" color="text.secondary">Duy Tan University Student</Typography>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Testimonials;