import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';

import UpdateContact from 'components/UpdateContact/UpdateContact';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const ContactItem = ({ name, number, id, onDeleteContacts }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <Item
        component="li"
        sx={{
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'space-between',
          padding: 2,
          alignItems: 'center',
          color: 'black',
        }}
      >
        <Box
          sx={{
            minWidth: 100,
            maxWidth: 170,
            textAlign: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="body1"
            component="h2"
            sx={{ overflow: 'hidden' }}
          >
            {name}:
          </Typography>
          <Typography
            variant="body1"
            component="h2"
            sx={{ overflow: 'hidden' }}
          >
            {number}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ marginRight: 1 }}>
            <Button variant="outlined" onClick={handleOpen}>
              <EditIcon />
            </Button>
            <Modal open={open} onClose={handleClose}>
              <Box sx={style}>
                <UpdateContact
                  id={id}
                  changeModal={setOpen}
                  UserName={name}
                  UserNumber={number}
                />
              </Box>
            </Modal>
          </Box>
          <Button
            variant="outlined"
            onClick={() => onDeleteContacts(id)}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </Box>
      </Item>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.any,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContacts: PropTypes.func,
};

export default ContactItem;
