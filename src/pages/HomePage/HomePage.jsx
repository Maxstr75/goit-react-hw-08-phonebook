import { useNavigate } from 'react-router-dom';
import { ReactComponent as LogoReact } from '../HomePage/logoReact.svg';
import { Box, Button, Typography } from '@mui/material';

// import { Rotate } from './HomePage.styled';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <LogoReact
          height="100"
          title="LogoReact"
          alt="LogoReact"
          fill="#836bf2"
          wrapperStyle={{
            width: '100%',
            animation: 'rotation 30s infinite linear',
            rotation: 'rotate(0deg, 359deg)',
          }}
        />
      </Box>

      <Typography
        variant="h6"
        component="h2"
        sx={{
          mt: 3,
          mb: 3,
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          textAlign: 'center',
        }}
      >
        Contacts phonebook from the React APP
      </Typography>
      <Typography
        variant="h6"
        component="h2"
        sx={{
          mt: 1,
          mb: 1,
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        Let's go!
      </Typography>

      <Button
        onClick={() => navigate('/login')}
        variant="contained"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        Try it now
      </Button>
    </>
  );
};

export default HomePage;
