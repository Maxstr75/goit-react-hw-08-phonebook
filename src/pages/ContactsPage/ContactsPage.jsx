import { Box, Typography } from '@mui/material';

const { ContactForm } = require('components/ContactForm');
// const { default: ContactList } = require('components/ContactList');
// const { default: Filter } = require('components/Filter');

const ContactsPage = () => {
  return (
    <>
      <Box sx={{ mb: 5 }}>
        <Typography variant="h6" component="h2">
          Phonebook
        </Typography>
        <ContactForm />
      </Box>
      <Typography variant="h6" component="h2">
        <>Contacts</>
      </Typography>
      {/* <Filter />
      <ContactList /> */}
    </>
  );
};

export default ContactsPage;
