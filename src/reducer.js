export function reducer( state, { type }){
    switch( type ){
        case "SET_ALERT":
            return{
                ...state,
                alert: true
            }
        case "REMOVE_ALERT":
            return{
                ...state,
                alert: false
            }
        default:
            return state;
    }
}