import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer";
import { types } from "../types/types";

const init = ()=>{
  const user = JSON.parse( localStorage.getItem('user'));
  return {
    logged: !!user,
    user: user,
  };
}

export const AuthProvider = ({children}) => {

  //note como hacemos una desestructuración de un arreglo podemos poner los nombre que querramos y no state o dispatch
  const [authState, dispatch] = useReducer(authReducer, {}, init);
  
  const login = (name = '') =>{
    const user = {id: 'ABC', name};
    const action = {
      type: types.login,
      payload: user
    };
    //note guardamos en el local storage
    localStorage.setItem('user',JSON.stringify(user));
    dispatch(action);
  };

  const logOut = ()=>{
    localStorage.removeItem('user');
    const action = {
      type: types.logout
    }
    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{
      // states
      ...authState,
      // methods
      login,
      logOut}}>
        {children}
    </AuthContext.Provider>
  )
}
