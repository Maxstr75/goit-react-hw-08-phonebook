import { FiLoader } from 'react-icons/fi';

const loaderRoot = document.querySelector('#loader-root');
const Loader = () => {
  return (
    (
      <FiLoader
        size={30}
        style={{
          display: 'block',
          top: '20',
          left: 'auto',
          right: 'auto',
          transform: 'translate(-50%, -50%)',
        }}
      />
    ),
    loaderRoot
  );
};

export default Loader;
