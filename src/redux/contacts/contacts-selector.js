export const getContacts = state => state.contacts.contacts;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

export const getFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts.contacts;
  }
  const normalizedFilter = filter.toLowerCase().trim();

  return contacts.contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
