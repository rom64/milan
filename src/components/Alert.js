import { useContext } from "react";

import './Alert.css';
import { AlertContext } from "../context";

const Alert = () =>{
    const { removeAlert } = useContext( AlertContext );
    return(
        <div className="alert-block">
            <h2>Fill out all the fields of the form!</h2>
            <button
                className="btn alert-btn"
                onClick={removeAlert}
            >
                Reply input
            </button>
        </div>
    )
}
export default Alert;