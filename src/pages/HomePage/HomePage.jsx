import { useNavigate } from 'react-router-dom';
import { ReactComponent as LogoReact } from '../HomePage/Redux.svg';
import { Box, Button, Typography } from '@mui/material';

import { Logo } from './HomePage.styled';
import { Container } from 'react-bootstrap';

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
        <Container>
          <Logo>
            <LogoReact
              height="100"
              title="LogoReact"
              alt="LogoReact"
              fill="#836bf2"
              style={{
                animation: 'rotation 30s infinite linear',
                transform: 'rotate(0deg, 360deg)',
              }}
            />
          </Logo>
        </Container>
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
