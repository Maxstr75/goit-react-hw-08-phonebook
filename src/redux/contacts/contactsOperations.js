import axios from 'axios';
// import * as actions from './contactsActions';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://62fab1f63c4f110faa9e3a1c.mockapi.io/';

export const fetchContact = createAsyncThunk(
  'contacts/fetchContact',
  async () => {
    const { data } = await axios.get('/contacts');
    return data;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const { data } = await axios.post('/contacts', contact);
    return data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    await axios.delete(`/contacts/${id}`);
    return id;
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, number, name }) => {
    const { data } = await axios.patch(`/contacts/${id}`, { number, name });
    return data;
  }
);
