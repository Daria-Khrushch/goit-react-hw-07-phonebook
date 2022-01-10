import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import contactsActions from '../../redux/contacts/contacts-actions';
import { useEffect } from 'react';
import s from './ContactList.module.css';

export default function ContactsList() {
  const contacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(contactsActions.deleteContact(id));

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(contacts));
  }, [contacts]);

  return contacts.length === 0 ? (
    <div> No contacts </div>
  ) : (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          {name}: {number}
          <button
            className={s.button}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
ContactsList.defaultProps = {
  contacts: [],
};

ContactsList.propTypes = {
  onDeleteContact: PropTypes.func,
  contacts: PropTypes.array.isRequired,
};
