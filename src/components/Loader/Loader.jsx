import { FiLoader } from 'react-icons/fi';

const Loader = () => {
  return (
    <div
      style={{
        mt: '20px',
        display: 'flex',
        color: '#0000FF',
        justifyContent: 'center',
        animation: 'rotation 1s infinite linear',
        transform: 'rotate(0deg, 360deg)',
      }}
    >
      <FiLoader size="30px" />
    </div>
  );
};

export default Loader;
