import { IoPersonOutline } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import CSS from './Contact.module.css';

Contact.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.any.isRequired,
        number: PropTypes.any.isRequired,
        id: PropTypes.any.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default function Contact({ contact: { name, number, id }, onDelete }) {
    return (
        <div className={CSS.container}>
            <ul>
                <li className={CSS.item}>
                    <IoPersonOutline size="20" style={{ color: 'black' }} />
                    <p>{name}</p>
                </li>
                <li className={CSS.item}>
                    <FaPhoneAlt size="20" style={{ color: 'black' }} />
                    <p>{number}</p>
                </li>
            </ul>
            <div className={CSS.btnContainer}>
                <button className={CSS.btn} onClick={() => onDelete(id)}>Delete</button>
            </div>
        </div>
    );
}
