import { createContext, useReducer } from "react";

import { reducer } from "./reducer";

const AlertContext = createContext();

const ContextProvider = ({ children }) =>{
    const initialState = {
        alert: false
    }
    const [ value, dispatch ] = useReducer(reducer, initialState);
    value.removeAlert = () =>{
        dispatch({ type: "REMOVE_ALERT"})
    }
    value.setAlert = () =>{
        dispatch({ type: "SET_ALERT"})
    }
    return(
        <AlertContext.Provider value={ value }>
            { children }
        </AlertContext.Provider>
    )
}
export { AlertContext, ContextProvider };