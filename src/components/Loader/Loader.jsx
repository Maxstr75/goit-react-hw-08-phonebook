import { FiLoader } from 'react-icons/fi';
import { Rotate } from './Loader.styled';

const Loader = () => {
  return (
    <Rotate>
      <FiLoader size="30px" />
    </Rotate>
  );
};

export default Loader;
