import  { useState, useContext } from 'react';

import Alert from "./Alert";

import './ItemAddForm.css';
import { AlertContext } from "../context";


const ItemAddForm = ({ onAdded }) =>{

    const [ label, setLabel ] = useState('');
    const [ number, setNumber ] = useState('' );


    const { alert, setAlert } = useContext( AlertContext );

    const onLabelChange=( e )=>{
        setLabel( e.target.value );
    }
    const onNumberChange = ( e )=>{
        setNumber( e.target.value);
    }

    const onSubmit = ( e ) =>{
        e.preventDefault();

        if( !label || !number ) {
            setAlert( true );
            return;
        }

        onAdded( label, number );
        setLabel('');
        setNumber('');
    }


    return(
        <>
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
            { alert && <Alert />}
        </>

    )


}
export default ItemAddForm;
