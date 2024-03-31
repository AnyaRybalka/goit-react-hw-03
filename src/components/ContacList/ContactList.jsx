import Contact from "../Contact/Contact";
import PropTypes from 'prop-types'; 
import CSS from './ContactList.module.css';

export default function ContactList({ contacts, onDelete }) {
    return (
        <ul className={CSS.list}>
            {contacts.map(contact => (
                <li className={CSS.item} key={contact.id}><Contact contact={contact} onDelete={onDelete}></Contact></li>
            ))}
        </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired, 
    onDelete: PropTypes.func.isRequired 
};
