import { Container, Section } from './App.styled';
import PhonebookAppBar from './PhonebookAppBar';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import authOperations from 'redux/auth/authOperations';
import Loader from './Loader';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import authSelectors from 'redux/auth/authSelectors';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Paper from '@mui/material/Paper';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

Notify.init({
  width: '300px',
  position: 'right-bottom',
  closeButton: false,
  clickToClose: true,
  timeout: 3000,
});

export function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return !isFetchingCurrentUser ? (
    <Suspense fallback={<Loader />}>
      <Container>
        <PhonebookAppBar />
        <Paper elevation={5}>
          <Section>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute redirectTo="/login">
                    <ContactsPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute restricted redirectTo="/contacts">
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <PublicRoute restricted redirectTo="/contacts">
                    <RegisterPage />
                  </PublicRoute>
                }
              />
              <Route path="*" element={<Navigate to="/contacts" />} />
            </Routes>
          </Section>
        </Paper>
      </Container>
    </Suspense>
  ) : (
    <Loader />
  );
}
