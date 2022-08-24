import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/contactsOperations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Box, Typography, TextField, Button } from '@mui/material';

const UpdateContact = ({ id, changeModal, UserName, UserNumber }) => {
  const [name, setName] = useState(UserName);
  const [number, setNumber] = useState(UserNumber);

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (name.trim() === '' || number.trim() === '') {
      Notify.failure('Fill in the fields');
      return;
    }
    dispatch(updateContact({ id, number, name }));
    return changeModal(false);
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '15px',
      }}
    >
      <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
        Edit Contact
      </Typography>
      <TextField
        type="text"
        name="name"
        label="Name"
        onChange={handleChange}
        value={name}
        variant="outlined"
        autoComplete="off"
      />
      <TextField
        type="tel"
        name="number"
        label="Number"
        onChange={handleChange}
        value={number}
        variant="outlined"
        sx={{ mb: 2, mt: 2 }}
        autoComplete="off"
      />
      <Button type="submit" variant="contained">
        Add contact
      </Button>
    </Box>
  );
};
export default UpdateContact;
