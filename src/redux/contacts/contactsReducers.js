import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as actions from './contactsActions';

import {
  fetchContact,
  addContact,
  deleteContact,
  updateContact,
} from './contactsOperations';

const items = createReducer([], {
  [fetchContact.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => {
    return [...state, payload];
  },
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [updateContact.fulfilled]: (state, { payload }) => {
    return state.map(contact =>
      contact.id === payload.id ? payload : contact
    );
  },
});

const filter = createReducer('', {
  [actions.handleFilter]: (_, { payload }) => payload,
});

const loading = createReducer([], {
  [fetchContact.pending]: () => true,
  [fetchContact.fulfilled]: () => false,
  [fetchContact.rejected]: () => false,

  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,

  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const contactReducers = combineReducers({
  items,
  filter,
  loading,
});

export { contactReducers };
