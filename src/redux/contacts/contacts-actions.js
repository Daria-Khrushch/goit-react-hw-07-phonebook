import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contact/Add', ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

const deleteContact = createAction('contacts/Delete');

const changeFilter = createAction('contacts/Filter');

export default { addContact, deleteContact, changeFilter };
