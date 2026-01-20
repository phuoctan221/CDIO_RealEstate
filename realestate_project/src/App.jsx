import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ForgotPassword from './pages/Auth/ForgotPassword';
import PropertyList from './pages/Property/PropertyList';
import PropertyDetail from './pages/Property/PropertyDetail';
// Import component bảo vệ vừa tạo
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      
      {/* --- CÁC TRANG CÔNG KHAI (Ai cũng vào được) --- */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      
      {/* --- CÁC TRANG CẦN BẢO VỆ (Phải đăng nhập mới vào được) --- */}
      <Route element={<PrivateRoute />}>
          <Route path="/properties" element={<PropertyList />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
      </Route>

    </Routes>
  );
}

export default App;