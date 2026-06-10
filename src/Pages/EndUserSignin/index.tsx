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

import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import background from '@/Assest/Background/EndUserSignIn.png';

import { UserRole } from '@/Types';
import { defaultTheme } from '@/theme';

const EndUserSigninPage: React.FC = () => {
  const [role, setRole] = useState<UserRole>(UserRole.Support);

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
          bgcolor: '#109F8E',
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
              onClick={() => setRole(UserRole.Support)}
              variant={role === UserRole.Support ? 'contained' : 'outlined'}
              sx={{
                borderRadius: '8px 0 0 8px',
                textTransform: 'none',
                fontWeight: 600,
                bgcolor: role === UserRole.Support ? 'secondary.main' : 'transparent',
                borderColor: 'secondary.main',
                color: role === UserRole.Support ? 'white' : 'secondary.main',
                '&:hover': {
                  bgcolor: role === UserRole.Support ? 'secondary.heavy' : '#f0f0ff',
                  borderColor: 'secondary.main',
                },
                py: 1.4,
                gap: 1,
              }}
            >
              Supporter
              <SupportAgentIcon />
            </Button>
            <Button
              onClick={() => setRole(UserRole.Admin)}
              variant={role === UserRole.Admin ? 'contained' : 'outlined'}
              sx={{
                borderRadius: '0 8px 8px 0',
                textTransform: 'none',
                fontWeight: 600,
                bgcolor: role === UserRole.Admin ? 'secondary.main' : 'transparent',
                borderColor: 'secondary.main',
                color: role === UserRole.Admin ? 'white' : 'secondary.main',
                '&:hover': {
                  bgcolor: role === UserRole.Admin ? 'secondary.heavy' : '#f0f0ff',
                  borderColor: 'secondary.main',
                },
                py: 1.4,
                gap: 1,
              }}
            >
              <AdminPanelSettingsIcon />
              Admin
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
                  sx={{ color: 'secondary.main', '&.Mui-checked': { color: 'secondary.main' } }}
                />
              }
              label={
                <Typography variant="caption" color="text.secondary">
                  Remember Login
                </Typography>
              }
            />
            <Link href="#" underline="hover" variant="caption" sx={{ color: 'secondary.main' }}>
              Forgot Password?
            </Link>
          </Box>

          <Button
            fullWidth
            variant="contained"
            sx={{
              bgcolor: 'secondary.main',
              borderRadius: 8,
              textTransform: 'none',
              fontWeight: 600,
              fontSize: 15,
              py: 1.4,
              mb: 2,
              '&:hover': { bgcolor: 'secondary.heavy' },
              boxShadow: '0 4px 16px rgba(92,92,200,0.3)',
            }}
          >
            Log In
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default EndUserSigninPage;
