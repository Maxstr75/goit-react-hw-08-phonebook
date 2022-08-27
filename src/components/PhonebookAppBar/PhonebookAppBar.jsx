import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import authOperations from 'redux/auth/authOperations';
import authSelectors from 'redux/auth/authSelectors';

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
      onClick={() => navigate('/')}
      ContactBook
      {isLoggedIn ? (
        <>
          {name}
          <div>
            <icon onClick={handleMenu}></icon>
            <menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <menuitem
                onClick={() => {
                  dispatch(authOperations.logOut());
                  handleClose();
                }}
              >
                Log out
              </menuitem>
            </menu>
          </div>
        </>
      ) : (
        <>
          <button type="submit" onClick={() => navigate('/register')}>
            Sign UP
          </button>
          <button type="submit" onClick={() => navigate('/login')}>
            Sign IN
          </button>
        </>
      )}
    </>
  );
};

export default PhonebookAppBar;
