import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterValueState } from 'redux/contacts/contactsSelectors';
// import { Input, Label } from './Filter.styled';
import * as actions from '../../redux/contacts/contactsActions';
import TextField from '@mui/material/TextField';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValueState);

  const handleFilter = event => {
    dispatch(actions.handleFilter(event.currentTarget.value));
  };

  return (
    <>
      <TextField
        variant="outlined"
        type="text"
        name="filter"
        label="Find contacts by name"
        value={filter}
        onChange={handleFilter}
        sx={{
          mb: 2,
          mt: 2,
        }}
      />
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
