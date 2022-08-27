import axios from 'axios';
// import * as actions from './contactsActions';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContact = createAsyncThunk(
  'contacts/fetchContact',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      console.log(rejectWithValue(error));
      return rejectWithValue(error);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, number, name }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/contacts/${id}`, { number, name });
      return data;
    } catch (error) {
      console.log(rejectWithValue(error));
      return rejectWithValue(error);
    }
  }
);
