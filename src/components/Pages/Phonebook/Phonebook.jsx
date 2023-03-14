import ContactForm from 'components/modules/ContactForm.jsx/ContactForm';
import Filter from 'components/modules/Filter/Filter';
import ContactList from 'components/modules/ContactList/ContactList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import {
  getError,
  getIsLoading,
  getContacts,
} from 'redux/contacts/contacts-selector';
import s from '../Phonebook/phonebook.module.css';

const Phonebook = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <section className={s.ContactsPage}>
        <div className={s.contactsContainer}>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          {isLoading && !error && (
            <div>
              <b>Request in progress ...</b>{' '}
            </div>
          )}
          {contacts.length >= 1 ? (
            <ContactList />
          ) : (
            <div>
              {' '}
              <p>You don't have any contacts yet</p>{' '}
            </div>
          )}
        </div>
      </section>
    </>
  );
};
export default Phonebook;
