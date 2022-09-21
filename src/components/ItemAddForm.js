import  { useState } from 'react';

import './ItemAddForm.css';


const ItemAddForm = ({ onAdded }) =>{

    const [ label, setLabel ] = useState('');
    const [ number, setNumber ] = useState('' );

    const onLabelChange=( e )=>{
        setLabel( e.target.value );
    }
    const onNumberChange = ( e )=>{
        setNumber( e.target.value);
    }
    const onSubmit = ( e ) =>{
        e.preventDefault();

        if( !label || !number ) {
            alert('Fill out all the fields of the form!');
            return;
        }
        onAdded( label, number );
        setLabel('');
        setNumber('');
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
            <input type="number"
                   className='form-control input-max-width'
                   placeholder='Add number'
                   min={1}
                   onChange={ onNumberChange }
                   value={ number }
            />
            <button className='btn btn-dark ms-1' style={{ whiteSpace: "nowrap" }}>Add Player</button>

        </form>
    )


}
export default ItemAddForm;
