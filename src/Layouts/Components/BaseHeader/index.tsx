import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  InputBase,
  Stack,
  ThemeProvider,
  Typography,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import QrCode2Icon from '@mui/icons-material/QrCode2';

import logo from '@/Assest/logo_normal.webp';
import apple from '@/Assest/logo_apple.png';
import ggplay from '@/Assest/logo_ggplay.png';

import { defaultTheme } from '@/theme';

// top cata from BE
const NAV_LINKS = [
  { label: 'SuperDeals', color: '#e62e04', fontWeight: 700 },
  { label: 'Vender gate' },
  { label: 'Customer service' },
];

const headerWidth = 1600;

const HeaderComponent: React.FC = () => {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppBar position="static" elevation={0} sx={{ bgcolor: '#fff' }}>
        <Container
          sx={{
            gap: 2,
            px: 2,
            py: 1,
            display: 'flex',
            width: headerWidth,
            maxWidth: 'unset !important',
            justifyContent: 'center',
          }}
        >
          <Box
            onClick={() => navigate('/')}
            sx={{
              cursor: 'pointer',
              width: '156px',
              height: '40px',
              backgroundSize: '156px 40px',
              backgroundImage: `url(${logo})`,
            }}
          />

          <Box
            sx={{
              maxWidth: '932px',
              height: '36px',
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              border: '1.5px solid #484848',
              borderRadius: '22px',
              bgcolor: '#f7f7f7',
              overflow: 'hidden',
            }}
          >
            <InputBase placeholder="I'm shopping for..." sx={{ flex: 1, px: 2, fontSize: 13 }} />
            <IconButton
              size="small"
              sx={{ borderRight: '1px solid #e0e0e0', borderRadius: 0, px: 1 }}
            >
              <CameraAltOutlinedIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              sx={{ bgcolor: '#e62e04', borderRadius: 0, px: 2, '&:hover': { bgcolor: '#c42500' } }}
            >
              <SearchIcon sx={{ color: '#fff' }} />
            </IconButton>
          </Box>

          <Stack sx={{ alignItems: 'center', flexShrink: 0 }} direction="row" spacing={2}>
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                '&:hover .popup': {
                  visibility: 'visible',
                  opacity: 1,
                },
              }}
            >
              <QrCode2Icon sx={{ fontSize: 40, color: '#333' }} />
              <Typography
                variant="caption"
                sx={{ color: '#666', lineHeight: 1.5, textAlign: 'left', fontWeight: 600 }}
              >
                Download the
                <br />
                AliExpress app
              </Typography>

              <Box
                className="popup"
                sx={{
                  display: 'flex',
                  visibility: 'hidden',
                  opacity: 0,
                  alignItems: 'stretch',
                  transition: 'opacity 0.2s ease',
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  zIndex: 999,
                  bgcolor: '#fff',
                  borderRadius: 6,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                  p: 1,
                  pr: 3,
                }}
              >
                <QrCode2Icon sx={{ fontSize: 140, color: '#333', mr: 1 }} />

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    py: 2,
                  }}
                >
                  <Box>
                    <Typography sx={{ fontSize: '16px', fontWeight: 600, color: 'black', pb: 1 }}>
                      Download the AliExpress app
                    </Typography>
                    <Typography sx={{ fontSize: '12px', color: 'black', pb: 1 }}>
                      Scan the QR code to download
                    </Typography>
                  </Box>

                  <Stack direction="row" spacing={1}>
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        bgcolor: '#111',
                        borderRadius: 8,
                        textTransform: 'none',
                        fontWeight: 600,
                        textWrap: 'nowrap',
                      }}
                      startIcon={<img src={apple} alt="apple" width={20} height={20} />}
                    >
                      App Store
                    </Button>
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        bgcolor: '#111',
                        borderRadius: 8,
                        textTransform: 'none',
                        fontWeight: 600,
                        textWrap: 'nowrap',
                      }}
                      startIcon={<img src={ggplay} alt="ggplay" width={20} height={20} />}
                    >
                      Google Play
                    </Button>
                  </Stack>
                </Box>
              </Box>
            </Box>

            <Stack direction="row" sx={{ alignItems: 'center' }} spacing={0.5}>
              <Box component="span" sx={{ fontSize: 18, lineHeight: 1 }} title="Vietnam">
                🇻🇳
              </Box>
              <Stack>
                <Typography
                  variant="caption"
                  sx={{ fontWeight: 600, color: '#333', lineHeight: 1.2 }}
                >
                  EN/
                </Typography>
                <Typography variant="caption" sx={{ color: '#666', lineHeight: 1.2 }}>
                  VND ∨
                </Typography>
              </Stack>
            </Stack>

            <Stack
              sx={{
                position: 'relative',
                alignItems: 'center',
                '&:hover .popup': { visibility: 'visible', opacity: 1 },
              }}
              direction="row"
              spacing={0}
            >
              <PersonIcon sx={{ fontSize: 32, color: '#333' }} />
              <Typography
                variant="caption"
                sx={{ color: '#666', lineHeight: 1.2, textAlign: 'left' }}
              >
                Welcome
                <br />
                <Box component="span" sx={{ fontWeight: 600, color: '#333' }}>
                  Sign in / Register
                </Box>
              </Typography>

              <Box
                className="popup"
                sx={{
                  visibility: 'hidden',
                  opacity: 0,
                  transition: 'opacity 0.2s ease',
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 999,
                  bgcolor: '#fff',
                  borderRadius: 3,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                  p: 2,
                  width: '200px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Button
                  onClick={() => navigate('/front_user/signin')}
                  fullWidth
                  variant="contained"
                  sx={{
                    bgcolor: '#111',
                    borderRadius: 8,
                    textTransform: 'none',
                    fontWeight: 600,
                    color: '#fff',
                  }}
                >
                  Sign in
                </Button>
                <Button
                  onClick={() => navigate('/front_user/signup')}
                  fullWidth
                  variant="text"
                  sx={{
                    textTransform: 'none',
                    color: '#333',
                    borderRadius: 8,
                    fontWeight: 400,
                    '&:hover': {
                      backgroundColor: '#d4d2d2',
                      fontWeight: 600,
                    },
                  }}
                >
                  Register
                </Button>
              </Box>
            </Stack>

            <Stack sx={{ alignItems: 'center' }} direction="row" spacing={1}>
              <ShoppingCartOutlinedIcon sx={{ fontSize: 32, color: '#333' }} />
              <Stack>
                <Box
                  sx={{
                    backgroundColor: 'red',
                    borderRadius: 3,
                    height: '16px',
                    minWidth: '24px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '12px',
                    pr: 0.15,
                  }}
                >
                  1
                </Box>
                <Typography variant="caption" sx={{ color: '#666' }}>
                  Cart
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Container>

        <Container
          sx={{
            display: 'flex',
            px: '88px',
            flexDirection: 'row',
            width: headerWidth,
            maxWidth: 'unset !important',
            justifyContent: 'flex-start',
          }}
        >
          <Button
            startIcon={<MenuIcon />}
            sx={{
              color: '#333',
              fontWeight: 600,
              fontSize: 13,
              justifyContent: 'flex-start',
              width: '14%',
              borderRadius: 8,
              px: 2,
              py: 1,
              mr: 1,
              backgroundColor: '#f5f5f5',
            }}
          >
            All Categories
          </Button>

          <Box sx={{ width: 'auto' }}>
            {NAV_LINKS.map((link, index) => (
              <Button
                key={index}
                sx={{
                  color: link.color ?? '#666',
                  fontWeight: link.fontWeight ?? 400,
                  fontSize: 16,
                  textTransform: 'none',
                  px: 1.5,
                  py: 1,
                  '&:hover': { color: link.color ?? '#333', bgcolor: 'transparent' },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default HeaderComponent;
