import { Box, Typography, Link, Grid, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const orangeRed = '#ee4d2d';
const bgLight = '#f5f5f5';
const bgWhite = '#ffffff';
const textMuted = '#757575';
const textDark = '#222222';
const borderColor = '#e0e0e0';

const colTitleSx = {
  fontSize: 12,
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  color: textDark,
  mb: 1.5,
};

const linkSx = {
  display: 'block',
  fontSize: 12.5,
  color: textMuted,
  textDecoration: 'none',
  mb: 0.9,
  lineHeight: 1.4,
  '&:hover': { color: orangeRed },
};

const UserFooter: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{ background: bgLight, width: '100%', fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
    >
      <Box sx={{ height: 4, background: orangeRed, width: '100%' }} />

      <Box sx={{ maxWidth: 1200, mx: 'auto', px: 3, pt: 3.5, pb: 2.5 }}>
        <Grid container spacing={3}>
          <Grid size={2.5}>
            <Typography sx={colTitleSx}>Dịch Vụ Khách Hàng</Typography>
            {[
              { label: 'Trung Tâm Trợ Giúp Shopee' },
              { label: 'Shopee Blog' },
              { label: 'Shopee Mall' },
              { label: 'Hướng Dẫn Mua Hàng/Đặt Hàng' },
              { label: 'Hướng Dẫn Bán Hàng' },
              { label: 'Ví ShopeePay' },
              { label: 'Shopee Xu' },
              { label: 'Đơn Hàng' },
              { label: 'Trả Hàng/Hoàn Tiền' },
              { label: 'Liên Hệ Shopee' },
              { label: 'Chính Sách Bảo Hành' },
            ].map(({ label }) => (
              <Link key={label} href="#" sx={linkSx}>
                {label}
              </Link>
            ))}
          </Grid>

          <Grid size={2}>
            <Typography sx={colTitleSx}>Shopee Việt Nam</Typography>
            {[
              { label: 'Về Shopee' },
              { label: 'Tuyển Dụng' },
              { label: 'Điều Khoản Shopee' },
              { label: 'Chính Sách Bảo Mật' },
              { label: 'Shopee Mall' },
              { label: 'Kênh Người Bán' },
              { label: 'Flash Sale' },
              { label: 'Tiếp Thị Liên Kết' },
              { label: 'Liên Hệ Truyền Thông' },
            ].map(({ label }) => (
              <Link key={label} href="#" sx={linkSx}>
                {label}
              </Link>
            ))}
          </Grid>

          <Grid size={2.25}>
            <Typography sx={colTitleSx}>Thanh Toán</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', mb: 2 }}>
              <Box sx={{ width: '60px', height: '30px' }}>1</Box>
              <Box sx={{ width: '60px', height: '30px' }}>1</Box>
              <Box sx={{ width: '60px', height: '30px' }}>1</Box>
              <Box sx={{ width: '60px', height: '30px' }}>1</Box>
              <Box sx={{ width: '60px', height: '30px' }}>1</Box>
              <Box sx={{ width: '60px', height: '30px' }}>1</Box>
              <Box sx={{ width: '60px', height: '30px' }}>1</Box>
              <Box sx={{ width: '60px', height: '30px' }}>1</Box>
              <Box sx={{ width: '60px', height: '30px' }}>1</Box>
            </Box>

            <Typography sx={colTitleSx}>Đơn Vị Vận Chuyển</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.7 }}>
              <Box sx={{ width: '60px', height: '30px' }}>1</Box>
              <Box sx={{ width: '60px', height: '30px' }}>1</Box>
              <Box sx={{ width: '60px', height: '30px' }}>1</Box>
              <Box sx={{ width: '60px', height: '30px' }}>1</Box>
              <Box sx={{ width: '60px', height: '30px' }}>1</Box>
              <Box sx={{ width: '60px', height: '30px' }}>1</Box>
              <Box sx={{ width: '60px', height: '30px' }}>1</Box>
              <Box sx={{ width: '60px', height: '30px' }}>1</Box>
              <Box sx={{ width: '60px', height: '30px' }}>1</Box>
            </Box>
          </Grid>

          <Grid size={2}>
            <Typography sx={colTitleSx}>Theo Dõi Shopee</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box onClick={() => navigate('something')}> icon ... fb </Box>
              <Box onClick={() => navigate('something')}> icon ... fb </Box>
              <Box onClick={() => navigate('something')}> icon ... fb </Box>
            </Box>
          </Grid>

          <Grid size={3}>
            <Typography sx={colTitleSx}>Tải Ứng Dụng Shopee</Typography>
            <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
              qr
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.8 }}>app downlaod</Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ borderColor: borderColor, mx: 3 }} />

      <Box
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          px: 3,
          py: 1.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 1,
        }}
      >
        <Typography sx={{ fontSize: 12, color: '#999' }}>
          © 2026 Shopee. Tất cả các quyền được bảo lưu.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 0.5,
            alignItems: 'center',
            fontSize: 12,
            color: '#999',
          }}
        >
          <Typography sx={{ fontSize: 12, color: '#bbb', mr: 0.5 }}>
            Quốc gia &amp; Khu vực:
          </Typography>
          {[
            'Argentina',
            'Singapore',
            'Indonesia',
            'Thái Lan',
            'Malaysia',
            'Việt Nam',
            'Philippines',
            'Brazil',
            'México',
            'Đài Loan',
          ].map((c, i, arr) => (
            <Box key={c} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Link
                href="#"
                sx={{
                  fontSize: 12,
                  color: '#888',
                  textDecoration: 'none',
                  '&:hover': { color: orangeRed },
                }}
              >
                {c}
              </Link>
              {i < arr.length - 1 && (
                <Typography sx={{ fontSize: 12, color: '#ccc' }}>|</Typography>
              )}
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ background: bgWhite, borderTop: `0.5px solid #e8e8e8` }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            py: 1.8,
          }}
        >
          {[
            'Chính Sách Bảo Mật',
            'Quy Chế Hoạt Động',
            'Chính Sách Vận Chuyển',
            'Chính Sách Trả Hàng Và Hoàn Tiền',
          ].map((p, i, arr) => (
            <Box key={p} sx={{ display: 'flex', alignItems: 'center' }}>
              <Link
                href="#"
                sx={{
                  fontSize: 11.5,
                  color: '#999',
                  textDecoration: 'none',
                  px: 2,
                  '&:hover': { color: orangeRed },
                }}
              >
                {p}
              </Link>
              {i < arr.length - 1 && (
                <Box sx={{ width: '0.5px', height: 14, background: '#ccc' }} />
              )}
            </Box>
          ))}
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, pb: 1.5 }}>
          {[
            { bg: '#c8102e', border: '#8b0000' },
            { bg: '#c8102e', border: '#8b0000' },
          ].map((style, i) => (
            <Box
              key={i}
              sx={{
                width: 58,
                height: 58,
                borderRadius: '50%',
                background: style.bg,
                border: `2px solid ${style.border}`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
              }}
            >
              <Typography sx={{ fontSize: 18, fontWeight: 900, lineHeight: 1 }}>✓</Typography>
              <Typography
                sx={{ fontSize: 5, fontWeight: 700, textAlign: 'center', lineHeight: 1.2 }}
              >
                ĐÃ ĐĂNG KÝ{'\n'}BỘ CÔNG THƯƠNG
              </Typography>
            </Box>
          ))}
          <Box
            sx={{
              width: 58,
              height: 58,
              borderRadius: '50%',
              background: '#888',
              border: '2px solid #555',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography sx={{ fontSize: 22 }}>🔏</Typography>
          </Box>
        </Box>

        <Box sx={{ textAlign: 'center', px: 3, pb: 2.5 }}>
          <Typography sx={{ fontSize: 12, color: '#999', mb: 0.3 }}>
            Công ty <strong>TNHH Shopee</strong>
          </Typography>
          <Typography sx={{ fontSize: 11.5, color: '#999', lineHeight: 2 }}>
            Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, Số 29 đường Liễu Giai, Phường Ngọc Hà, Thành
            phố Hà Nội,{' '}
            <Link href="#" sx={{ color: '#888' }}>
              Việt Nam
            </Link>
          </Typography>
          <Typography sx={{ fontSize: 11.5, color: '#999', lineHeight: 2 }}>
            Chăm sóc khách hàng: Gọi tổng đài Shopee (miễn phí) hoặc Trò chuyện với Shopee ngay trên
            Trung tâm trợ giúp
          </Typography>
          <Typography sx={{ fontSize: 11.5, color: '#999', lineHeight: 2 }}>
            Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Bùi Anh Tuấn
          </Typography>
          <Typography sx={{ fontSize: 11.5, color: '#999', lineHeight: 2 }}>
            Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch và Đầu tư TP Hà Nội cấp lần đầu ngày
            10/02/2015
          </Typography>
          <Typography sx={{ fontSize: 11.5, color: '#999', lineHeight: 2 }}>
            © 2015 - Bản quyền thuộc về Công ty TNHH Shopee
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default UserFooter;
