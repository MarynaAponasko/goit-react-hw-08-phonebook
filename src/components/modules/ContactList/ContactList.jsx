import ContactItem from './ContactsItem/ContactsItem';

import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getFilteredContacts } from 'redux/contacts/contacts-selector';
import s from '../ContactList/ContactList.module.css';

const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const handlerDeleteContacts = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={s.list}>
      {filteredContacts.map(contact => (
        <ContactItem
          contact={contact}
          deleteContact={handlerDeleteContacts}
          key={contact.id}
        />
      ))}
    </ul>
  );
};

export default ContactList;
