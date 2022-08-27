import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperations';
import { Link } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ currentTarget: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;

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
    if (name === '' || email === '' || password === '') {
      Notify.failure('Fill in all the fields');
      return;
    }
    if (password.length < 8) {
      Notify.failure('Minimum password length - 8 characters');
      return;
    }
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <input
          type="name"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
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
          minLength="8"
          required
        />
        <button>Login</button>
        <Link margin="normal" to="/login">
          Already have an account? Sign in
        </Link>
      </form>
    </>
  );
};

export default RegisterPage;
