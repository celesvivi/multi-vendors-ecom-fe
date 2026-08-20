import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  ThemeProvider,
  Typography,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import ErrorIcon from '@mui/icons-material/Error';

import background from '@/Assest/Background/EndUserSignIn.png';

import { UserRole, UserType } from '@/Types';
import { signInBody } from '@/Types/payload';

import { requestAPI } from '@/utils/fetchApi';
import { AUTH_API_URLS } from '@/utils/ApiUrl';
import { afterSignInLink } from '@/Types/linked';

import { defaultTheme } from '@/theme';

const SupportSigninPage: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string[]>([]);
  const [emailTouched, setEmailTouched] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [passwordTouched, setPasswordTouched] = useState(false);

  const [isNotFound, setIsNotFound] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const [isSummit, setIsSummit] = useState(false);

  useEffect(() => {
    if (!emailTouched) return;

    setEmailError([]);

    const timer = setTimeout(() => {
      if (!email) {
        setEmailError(['Email is required!!']);
      }
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
        setEmailError(['Invalid email address']);
    }, 350);

    return () => clearTimeout(timer);
  }, [email, emailTouched, isSummit]);

  useEffect(() => {
    if (!passwordTouched) return;

    setPasswordError('');

    const timer = setTimeout(() => {
      if (!password) setPasswordError('Password is empty!!');
    }, 350);

    return () => clearTimeout(timer);
  }, [password, passwordTouched, isSummit]);

  useEffect(() => {
    if (isSummit) setIsNotFound(false);
  }, [isSummit]);

  const handleSummit = async () => {
    setIsSummit(true);
    if (!password || !email) return;

    const payload: signInBody = {
      email: email,
      password: password,
      userType: UserType.EndUser,
    };

    let res;

    try {
      res = await requestAPI(AUTH_API_URLS.SIGNIN, 'post', payload);
      localStorage.setItem('accessToken', res.data.accessToken);
      localStorage.setItem('userId', res.data.user_id);
      navigate(afterSignInLink[UserRole.Support]);
    } catch (err: any) {
      if (err?.response?.status === 404) {
        setIsNotFound(true);
        setEmailTouched(false);
        setPasswordTouched(false);
        return;
      }
      console.log(err);
    } finally {
      setIsSummit(false);
    }
  };

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

          {isNotFound && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                mb: 2,
                p: 1.5,
                border: '1px solid red',
                borderRadius: 1,
              }}
            >
              <ErrorIcon color="error" />
              <Typography variant="body2" color="error">
                Tên tài khoản của bạn hoặc Mật khẩu không đúng, vui lòng thử lại
              </Typography>
            </Box>
          )}

          <Box sx={{ display: 'flex', flexDirection: 'column', pb: 2 }}>
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setEmailTouched(true)}
              error={emailTouched && emailError.length > 0}
              helperText={emailTouched ? (emailError[0] ?? '') : ''}
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
                  '&:has(input:-webkit-autofill)': { backgroundColor: '#faffbd' },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'secondary.main',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': { color: 'secondary.main' },
              }}
            />
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', pb: 2 }}>
            <TextField
              fullWidth
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => setPasswordTouched(true)}
              error={passwordTouched && passwordError.length > 0}
              helperText={passwordTouched ? passwordError : ''}
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
                  '&:has(input:-webkit-autofill)': { backgroundColor: '#faffbd' },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'secondary.main',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': { color: 'secondary.main' },
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
            onClick={() => handleSummit()}
            disabled={
              isSummit ||
              (passwordTouched && passwordError.length > 0) ||
              (emailTouched && emailError.length > 0)
            }
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

export default SupportSigninPage;
