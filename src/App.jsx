import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContacList/ContactList";
import SearchBar from "./components/SearchBar/SearchBar";
import './App.css'; 
const initialValues = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem('contacts');
    return savedContacts !== null ? JSON.parse(savedContacts) : initialValues;
  })
  const [filter, setFilter] = useState('');
  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  const addContact = newContact => {
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };
  const removeContact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };
  return (
    <div className="container"> {}
      <h1 className="phonebook-title">Phonebook</h1>
      <ContactForm onAdd={addContact}></ContactForm>
      <SearchBar value={filter} onFilter={setFilter}></SearchBar>
      <ContactList contacts={visibleContacts} onDelete={removeContact}></ContactList>
    </div>
  );
}

