import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { List } from './ContactList.styled';
import { Message } from 'components/Notiflix/Message';

export const ContactList = ({ contacts, OnDeleteContact }) => (
  <List>
    {contacts.map(contact => (
      <li key={contact.id}>
        <ContactsItem
          contact={contact}
          contacts={contacts}
          deleteContact={OnDeleteContact}
        />
      </li>
    ))}
  </List>
);
