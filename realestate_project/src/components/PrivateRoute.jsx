import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  // Lấy token từ bộ nhớ trình duyệt ra kiểm tra
  const token = localStorage.getItem("accessToken");

  // Nếu có token (đã đăng nhập) -> Cho phép hiển thị nội dung bên trong (Outlet)
  // Nếu không có token (chưa đăng nhập) -> Đá về trang Login
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;