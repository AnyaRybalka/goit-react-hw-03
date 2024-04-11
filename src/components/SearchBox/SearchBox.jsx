import PropTypes from 'prop-types';
import { useId } from "react";
import CSS from './SearchBox.module.css';

export default function SearchBox({ value, onFilter }) {
    const searchId = useId();
    return (
        <div className={CSS.container}>
            <label htmlFor={searchId}>Find contacts by name</label>
            <input
                className={CSS.input}
                type="text"
                name="search"
                id={searchId}
                value={value}
                onChange={e=>onFilter(e.target.value)}
            ></input>
        </div>
    )
}

SearchBox.propTypes = {
    value: PropTypes.string.isRequired,
    onFilter: PropTypes.func.isRequired
};
