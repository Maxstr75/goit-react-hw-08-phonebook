import { useNavigate } from 'react-router-dom';
import { ReactComponent as LogoReact } from '../HomePage/logoReact.svg';
import {
  Box,
  // Button,
  // Typography
} from '@mui/material';

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
            transform: 'rotate(0deg, 359deg)',
          }}
        />
      </Box>

      <div>Contacts phonebook from the React APP</div>
      <div>Let's go!</div>
      <button type="submit" onClick={() => navigate('/login')}>
        Try to now
      </button>
    </>
  );
};

export default HomePage;
