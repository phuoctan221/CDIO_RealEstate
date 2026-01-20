import { Card, CardMedia, CardContent, Typography, Button, CardActions, Chip, Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();

  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        borderRadius: '16px', // Bo tròn đẹp hơn
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translateY(-5px)', // Hiệu ứng bay lên khi di chuột
          boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
        }
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="220"
          image={property.image}
          alt={property.title}
        />
        {/* Giá tiền nổi bật */}
        <Box 
          sx={{
            position: 'absolute',
            bottom: 10,
            left: 10,
            bgcolor: 'rgba(26, 77, 46, 0.9)', // Màu xanh rêu trong suốt
            color: '#fff',
            padding: '4px 12px',
            borderRadius: '20px',
            fontWeight: 'bold',
            fontSize: '0.9rem'
          }}
        >
          {property.price.toLocaleString()} VND
        </Box>
        
        {/* Trạng thái */}
        <Chip 
          label={property.status} 
          color={property.status === 'Đang bán' ? 'success' : 'warning'} 
          size="small"
          sx={{ 
            position: 'absolute', 
            top: 10, 
            right: 10, 
            fontWeight: 'bold',
            backgroundColor: property.status === 'Đang bán' ? '#e8f5e9' : '#fff3e0',
            color: property.status === 'Đang bán' ? '#2e7d32' : '#ef6c00'
          }}
        />
      </Box>
      
      <CardContent sx={{ flexGrow: 1, pb: 1 }}>
        <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold', lineHeight: 1.3, fontSize: '1.1rem' }}>
          {property.title}
        </Typography>

        <Box display="flex" alignItems="flex-start" mt={1}>
          <LocationOnIcon fontSize="small" color="action" sx={{ mr: 0.5, mt: 0.2 }} />
          <Typography variant="body2" color="text.secondary">
            {property.address}
          </Typography>
        </Box>
      </CardContent>

      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button 
          fullWidth 
          variant="contained" 
          onClick={() => navigate(`/property/${property.id}`)}
          sx={{ 
            bgcolor: '#1a4d2e', // Màu xanh rêu đồng bộ
            '&:hover': { bgcolor: '#143d23' },
            textTransform: 'none',
            fontWeight: 'bold',
            borderRadius: '8px',
            py: 1
          }}
        >
          Xem Chi Tiết
        </Button>
      </CardActions>
    </Card>
  );
};

export default PropertyCard;