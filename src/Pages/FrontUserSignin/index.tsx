import { useState } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  ThemeProvider,
  Typography,
} from '@mui/material';

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import background from '@/Assest/Background/FrontUserSignIn.png';

import { UserRole } from '@/Types';
import { defaultTheme } from '@/theme';

const FrontUserSigninPage: React.FC = () => {
  const [role, setRole] = useState<UserRole>(UserRole.Customer);

  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          bgcolor: '#EE4D2D',
          px: 32,
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            pl: 8,
            pr: 4,
            maxWidth: 480,
          }}
        >
          <Box component="img" src={background} />
        </Box>

        <Box
          sx={{
            bgcolor: 'white',
            boxShadow: '0 4px 40px rgba(0,0,0,0.08)',
            height: '100vh',
            width: '100%',
            maxWidth: 420,
            p: 5,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h4"
            sx={{ mb: 3, textAlign: 'center', color: '7777cc', fontWeight: 600 }}
          >
            Đăng nhập
          </Typography>

          <ButtonGroup fullWidth sx={{ mb: 3 }}>
            <Button
              onClick={() => setRole(UserRole.Customer)}
              variant={role === UserRole.Customer ? 'contained' : 'outlined'}
              sx={{
                borderRadius: '8px 0 0 8px',
                textTransform: 'none',
                fontWeight: 600,
                bgcolor: role === UserRole.Customer ? 'primary.main' : 'transparent',
                borderColor: 'primary.main',
                color: role === UserRole.Customer ? 'white' : 'primary.main',
                '&:hover': {
                  bgcolor: role === UserRole.Customer ? 'primary.heavy' : '#f0f0ff',
                  borderColor: 'primary.main',
                },
                py: 1.4,
                gap: 1,
              }}
            >
              Customer
              <ShoppingCartIcon />
            </Button>
            <Button
              onClick={() => setRole(UserRole.Vender)}
              variant={role === UserRole.Vender ? 'contained' : 'outlined'}
              sx={{
                borderRadius: '0 8px 8px 0',
                textTransform: 'none',
                fontWeight: 600,
                bgcolor: role === UserRole.Vender ? 'primary.main' : 'transparent',
                borderColor: 'primary.main',
                color: role === UserRole.Vender ? 'white' : 'primary.main',
                '&:hover': {
                  bgcolor: role === UserRole.Vender ? 'primary.heavy' : '#f0f0ff',
                  borderColor: 'primary.main',
                },
                py: 1.4,
                gap: 1,
              }}
            >
              <StorefrontIcon />
              Vendor
            </Button>
          </ButtonGroup>

          <Box sx={{ display: 'flex', flexDirection: 'column', pb: 2 }}>
            <Typography variant="caption" sx={{ fontWeight: 500, color: 'text.secondary' }}>
              Email
            </Typography>
            <TextField
              fullWidth
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <AlternateEmailIcon sx={{ color: '#aaa', fontSize: 20 }} />
                    </InputAdornment>
                  ),
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&:has(input:-webkit-autofill)': {
                    backgroundColor: '#faffbd',
                  },
                },
              }}
            />
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', pb: 2 }}>
            <Typography variant="caption" sx={{ fontWeight: 500, color: 'text.secondary' }}>
              Password
            </Typography>
            <TextField
              fullWidth
              type={showPassword ? 'text' : 'password'}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlinedIcon sx={{ color: '#aaa', fontSize: 20 }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        size="small"
                        onClick={() => setShowPassword((p) => !p)}
                        edge="end"
                      >
                        {showPassword ? (
                          <VisibilityOffOutlinedIcon sx={{ fontSize: 18, color: '#aaa' }} />
                        ) : (
                          <VisibilityOutlinedIcon sx={{ fontSize: 18, color: '#aaa' }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&:has(input:-webkit-autofill)': {
                    backgroundColor: '#faffbd',
                  },
                },
              }}
            />
          </Box>

          <Box
            sx={{ mb: 3, alignItems: 'center', justifyContent: 'space-between', display: 'flex' }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  sx={{ color: 'primary.main', '&.Mui-checked': { color: 'primary.main' } }}
                />
              }
              label={
                <Typography variant="caption" color="text.secondary">
                  Remember Login
                </Typography>
              }
            />
            <Link href="#" underline="hover" variant="caption" sx={{ color: 'primary.main' }}>
              Forgot Password?
            </Link>
          </Box>

          <Button
            fullWidth
            variant="contained"
            sx={{
              bgcolor: 'primary.main',
              borderRadius: 8,
              textTransform: 'none',
              fontWeight: 600,
              fontSize: 15,
              py: 1.4,
              mb: 2,
              '&:hover': { bgcolor: 'primary.heavy' },
              boxShadow: '0 4px 16px rgba(92,92,200,0.3)',
            }}
          >
            Log In
          </Button>

          <Box sx={{ mb: 2, alignItems: 'center', display: 'flex', gap: 1.5 }}>
            <Box sx={{ bgcolor: '#e0e0e0', flex: 1, height: '1px' }} />
            <Typography variant="caption" color="text.secondary">
              OR
            </Typography>
            <Box sx={{ bgcolor: '#e0e0e0', flex: 1, height: '1px' }} />
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 3 }}>
            <IconButton
              sx={{
                border: '1px solid #e0e0e0',
                borderRadius: 2,
                p: 1,
                '&:hover': { bgcolor: '#f0f5ff' },
              }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              sx={{
                border: '1px solid #e0e0e0',
                borderRadius: 2,
                p: 1,
                '&:hover': { bgcolor: '#fff5f5' },
              }}
            >
              <GoogleIcon />
            </IconButton>
            <IconButton
              sx={{
                border: '1px solid #e0e0e0',
                borderRadius: 2,
                p: 1,
                '&:hover': { bgcolor: '#f0faff' },
              }}
            >
              <TwitterIcon />
            </IconButton>
          </Box>

          <Typography variant="body2" sx={{ textAlign: 'center', color: 'text.secondary' }}>
            Don't have account?{' '}
            <Link href="#" sx={{ color: '#1a1a6e', underline: 'hover', fontWeight: 700 }}>
              SignUp
            </Link>
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default FrontUserSigninPage;
