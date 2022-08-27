import { useNavigate } from 'react-router-dom';
import { ReactComponent as LogoReact } from '../HomePage/logoReact.svg';
import { Rotate } from './HomePage.styled';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Rotate>
        <LogoReact />
      </Rotate>
      <>Contacts phonebook from the React APP</>
      <>Let's go!</>
      <button type="submit" onClick={() => navigate('/login')}>
        Try to now
      </button>
    </>
  );
};

export default HomePage;
