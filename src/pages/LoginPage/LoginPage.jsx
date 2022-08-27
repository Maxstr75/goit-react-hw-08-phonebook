import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import authOperations from 'redux/auth/authOperations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useDispatch('');
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
      <form onSubmit={handleSubmit} noValidate>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <button>Login</button>
        <Link to="/register">Don't have an account? Sign Up</Link>
      </form>
    </>
  );
};

export default LoginPage;
