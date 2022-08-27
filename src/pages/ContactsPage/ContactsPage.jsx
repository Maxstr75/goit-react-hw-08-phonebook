import { ContactForm, ContactList, Filter } from 'components';

// const { ContactForm } = require('components/ContactForm');
// const { default: ContactList } = require('components/ContactList');
// const { default: Filter } = require('components/Filter');

const ContactsPage = () => {
  return (
    <>
      Phonebook
      <ContactForm />
      <>Contacts</>
      <Filter />
      <ContactList />
    </>
  );
};

export default ContactsPage;
