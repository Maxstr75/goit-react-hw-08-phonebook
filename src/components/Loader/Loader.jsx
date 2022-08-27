import { FiLoader } from 'react-icons/fi';
import { Rotate } from './Loader.styled';

const loaderRoot = document.querySelector('#loader-root');
const Loader = () => {
  return (
    (
      <Rotate>
        <FiLoader
          size={30}
          style={{
            display: 'block',
            top: '20',
            left: 'auto',
            right: 'auto',
            // transform: 'translate(-50%, -50%)',
          }}
        />
      </Rotate>
    ),
    loaderRoot
  );
};

export default Loader;
