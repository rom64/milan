import { useState } from 'react';

import './SearchPanel.css';

const SearchPanel = ({ onSearchChange }) =>{

    const [term, setTerm] = useState('');
    const onSearchChanges = ( e ) =>{
        const term = e.target.value;
        setTerm( term );
        onSearchChange( term );
    }

    return (
        <input
            type="text"
            placeholder='search'
            className="search-input form-control me-1"
            value={ term }
            onChange={ onSearchChanges }
        />
    )
}
export default SearchPanel;
