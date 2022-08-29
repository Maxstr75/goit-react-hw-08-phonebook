import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import authOperations from 'redux/auth/authOperations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Box, Button, TextField } from '@mui/material';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ currentTarget: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (email === '' || password === '') {
      Notify.failure('Fill in all the fields');
      return;
    }
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            flexDirection: 'column',
            alignItem: 'center',
            marginTop: 3,
            marginBottom: 3,
            width: '300px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <TextField
            required
            autoFocus
            type="email"
            name="email"
            value={email}
            label="Email address"
            placeholder="Email"
            variant="outlined"
            onChange={handleChange}
          />

          <TextField
            sx={{ marginBottom: 2, marginTop: 2 }}
            required
            type="password"
            name="password"
            value={password}
            label="Password"
            placeholder="Password"
            variant="outlined"
            onChange={handleChange}
          />

          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{ mb: 2, mt: 3 }}
          >
            Login
          </Button>

          <Link margin="normal" to="/register">
            Don't have an account? Sign Up
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default LoginPage;
