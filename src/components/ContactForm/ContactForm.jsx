import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItemsValueState } from 'redux/contacts/contactsSelectors';
import * as operations from 'redux/contacts/contactsOperations';
import { Button, Form, Input, Label } from './ContactForm.styled';
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
    <Form onSubmit={handleSubmit} autoComplete="on">
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>

      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

ContactForm.porTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
