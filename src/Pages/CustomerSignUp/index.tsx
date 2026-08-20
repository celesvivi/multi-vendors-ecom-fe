import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  ThemeProvider,
  Typography,
} from '@mui/material';

import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PersonIcon from '@mui/icons-material/Person';

import ErrorIcon from '@mui/icons-material/Error';

import background from '@/Assest/Background/FrontUserSignIn.png';
import { UserRole, UserType } from '@/Types';
import { defaultTheme } from '@/theme';
import { signUpBody } from '@/Types/payload';
import { requestAPI } from '@/utils/fetchApi';
import { AUTH_API_URLS } from '@/utils/ApiUrl';
import { useNavigate } from 'react-router-dom';

const CustomerSignupPage: React.FC = () => {
  const navigate = useNavigate()

  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState<string>('');
  const [usernameTouched, setUsernameTouched] = useState(false);

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string[]>([]);
  const [emailTouched, setEmailTouched] = useState(false);

  const [isConflict, setIsConflict] = useState(false);

  const [isSummit, setIsSummit] = useState(false);

  useEffect(() => {
    if (!usernameTouched) return;

    setUsernameError('');

    const timer = setTimeout(() => {
      if (!username) setUsernameError('Username is required!!');
    }, 350);

    return () => clearTimeout(timer);
  }, [username, usernameTouched, isSummit]);

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
    if (isSummit) setIsConflict(false);
  }, [isSummit]);

  const handleSummit = async () => {
    setIsSummit(true);
    if (!username || !email) return;

    const payload: signUpBody = {
      username: username,
      email: email,
      role: UserRole.Customer,
      userType: UserType.FrontUser,
    };

    try {
      const res = await requestAPI(AUTH_API_URLS.SIGNUP, 'post', payload);
      //toaster
    } catch (err: any) {
      if (err?.response?.status === 409) {
        setIsConflict(true);
        setEmailTouched(false);
        setUsernameTouched(false);
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
            sx={{ mb: 6, textAlign: 'center', color: '7777cc', fontWeight: 600 }}
          >
            Đăng ký
          </Typography>

          {isConflict && (
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
                Email hoặc tên tài khoản đã tồn tại, vui lòng thử lại
              </Typography>
            </Box>
          )}

          <Box sx={{ display: 'flex', flexDirection: 'column', pb: 2 }}>
            <TextField
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onBlur={() => setUsernameTouched(true)}
              error={usernameTouched && usernameError.length > 0}
              helperText={usernameTouched ? usernameError : ''}
              fullWidth
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon sx={{ color: '#aaa', fontSize: 20 }} />
                    </InputAdornment>
                  ),
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&:has(input:-webkit-autofill)': { backgroundColor: '#faffbd' },
                },
              }}
            />
          </Box>

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
                },
              }}
            />
          </Box>

          <Button
            onClick={() => handleSummit()}
            disabled={
              isSummit ||
              (usernameTouched && usernameError.length > 0) ||
              (emailTouched && emailError.length > 0)
            }
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
              mt: 1,
              '&:hover': { bgcolor: 'primary.heavy' },
              boxShadow: '0 4px 16px rgba(92,92,200,0.3)',
            }}
          >
            Sign Up
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
            Already have an account?{' '}
            <Link 
              onClick={() => navigate('/front_user/signin')}
              sx={{ color: '#1a1a6e', fontWeight: 700, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
              Sign In
            </Link>
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default CustomerSignupPage;
