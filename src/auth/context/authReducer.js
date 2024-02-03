import { types } from "../types/types";


export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload
                // note en user voy a guardar todo el payload ->  payload: {id: 'ABC',name: name}
            };
            
        case types.logout:
            console.log({
                ...state,
                logged: false
            });
            return {
                ...state,
                logged: false
            };
            
        default:
            return state;
    }
}   