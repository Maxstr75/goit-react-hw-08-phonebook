import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authOperations from 'redux/auth/authOperations';
import authSelectors from 'redux/auth/authSelectors';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Box } from '@mui/material';

const PhonebookAppBar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const [anchorEl, setAnchorEl] = useState(null);
  let navigate = useNavigate();
  const name = useSelector(authSelectors.getUsername);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              component="a"
              onClick={() => navigate('/')}
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                fontSize: '20px',
                color: 'inherit',
                textDecoration: 'none',
                flexGrow: 1,
                cursor: 'pointer',
              }}
            >
              ContactBook
            </Box>

            {isLoggedIn ? (
              <>
                <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
                  {name}
                </Typography>
                <div>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem
                      onClick={() => {
                        dispatch(authOperations.logOut());
                        handleClose();
                      }}
                    >
                      Log out
                    </MenuItem>
                  </Menu>
                </div>
              </>
            ) : (
              <>
                <Button color="inherit" onClick={() => navigate('/register')}>
                  Sign UP
                </Button>
                <Button color="inherit" onClick={() => navigate('/login')}>
                  Sign IN
                </Button>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default PhonebookAppBar;
