import  { useState } from 'react';

import './ItemAddForm.css';


const ItemAddForm = ({ onAdded }) =>{

    const [label, setLabel] = useState('');

    const onLabelChange=( e )=>{
        setLabel( e.target.value );
    }
    const onSubmit = ( e ) =>{
        e.preventDefault();
        if( !label ) {
            return;
        }
        onAdded( label );
        setLabel('');
    }

    return(
        <form
            className='item-add-form d-flex'
            onSubmit={ onSubmit }
        >
            <input type="text"
                   className='form-control'
                   placeholder='Add player'
                   onChange={ onLabelChange }
                   value={ label }
            />
            <button className='btn btn-dark ms-1' style={{ whiteSpace: "nowrap" }}>Add Player</button>
        </form>
    )


}
export default ItemAddForm;
