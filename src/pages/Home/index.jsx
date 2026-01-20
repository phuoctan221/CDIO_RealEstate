import React from 'react';
import { Box } from '@mui/material';
import Hero from './Hero';
import Featured from './Featured';
import CitySlider from './CitySlider';
import WhyChooseUs from './WhyChooseUs';
import Expertise from './Expertise';
import Testimonials from './Testimonials';
import News from './News';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <Box>
      {/* 1. Slider chính & Bộ lọc tìm kiếm */}
      <Hero />

      {/* 2. Danh sách Bất động sản nổi bật (Có Slider) */}
      <Box sx={{ py: 10 }}>
        <Featured />
      </Box>

      {/* 3. Thông tin bất động sản các thành phố (CitySlider) */}
      <Box sx={{ py: 10, bgcolor: '#f9f9f9' }}>
        <CitySlider />
      </Box>

      {/* 4. Tại sao phải chọn chúng tôi (WhyChooseUs - Vùng màu vàng) */}
      <WhyChooseUs />

      {/* 5. Chuyên gia địa phương (Expertise - Vùng màu xanh đậm) */}
      <Expertise />

      {/* 6. Ý kiến khách hàng (Testimonials) */}
      <Box sx={{ py: 10 }}>
        <Testimonials />
      </Box>

      {/* 7. Tin tức & Bài viết mới nhất (News) */}
      <Box sx={{ py: 10, bgcolor: '#fdfdfd' }}>
        <News />
      </Box>

      {/* 8. Chân trang (Footer - Vùng màu đen) */}
      <Footer />
    </Box>
  );
};

export default Home;