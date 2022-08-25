import { useNavigate } from 'react-router-dom';
import { LogoReact } from '../HomePage/logoReact.svg';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <LogoReact />
      <>Contacts phonebook from the React APP</>
      <>Let's go!</>
      <button type="submit" onClick={() => navigate('/login')}>
        Try to now
      </button>
    </>
  );
};

export default HomePage;
