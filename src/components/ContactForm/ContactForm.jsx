import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItemsValueState } from 'redux/contacts/contactsSelectors';
import * as operations from 'redux/contacts/contactsOperations';
import { Button, Box, TextField } from '@mui/material';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getItemsValueState);
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
        break;
    }
  };

  const addContacts = ({ name, number }) => {
    const findName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (findName) {
      Notify.failure(`${name} is already in contacts.`);
    }
    const findNumber = contacts.find(contact => contact.number === number);
    if (findNumber) {
      Notify.failure(`${number} number is already in use.`);
    } else {
      return dispatch(operations.addContact({ name, number }));
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    reset();

    return addContacts({ name, number });
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '15px',
        }}
      >
        <TextField
          type="text"
          name="name"
          label="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
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
          // pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="The phone number must be 13 digits long and may contain numbers, spaces, dashes, paunches, and may begin with +"
          value={number}
          variant="outlined"
          sx={{ mb: 2, mt: 2 }}
          autoComplete="off"
        />
        <Button type="submit" variant="contained">
          Add contact
        </Button>
      </Box>
    </>
  );
};

ContactForm.porTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
