import { createAction } from '@reduxjs/toolkit';

export const fetchContactsSuccess = createAction(
  'contacts/fetchContactSuccess',
);
export const fetchContactsError = createAction('contacts/addContactError');

export const addContactRequest = createAction('contacts/addContactRequest');

export const deleteContactError = createAction('contacts/deleteContactError');

export const changeFilter = createAction('contacts/Filter');
