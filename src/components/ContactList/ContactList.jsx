import { Contacts, ContactsItem } from './ContactList.styled';
import { Contact } from 'components/Contact';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { selectContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);

  const lowerCaseFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(lowerCaseFilter)
  );

  return (
    <Contacts>
      {filteredContacts.map(contact => {
        const { name, number, id } = contact;

        return (
          <ContactsItem key={id}>
            <Contact
              name={name}
              number={number}
              onClick={() => {
                deleteContact(id);
              }}
            />
          </ContactsItem>
        );
      })}
    </Contacts>
  );
};
