import PropTypes from 'prop-types';
import { useId } from "react";
import CSS from './SearchBar.module.css';

export default function SearchBar({ value, onFilter }) {
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

SearchBar.propTypes = {
    value: PropTypes.string.isRequired,
    onFilter: PropTypes.func.isRequired
};
