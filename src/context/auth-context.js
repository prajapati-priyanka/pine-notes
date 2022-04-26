import {createContext, useContext, useReducer} from "react";
import { authReducer } from "../reducer/auth-reducer";

const authInitialState = {
    user: "",
    token : ""
}

const AuthContext = createContext();

const AuthProvider = ({children}) =>{
   
    const [authState, authDispatch] = useReducer(authReducer, authInitialState) 

   return <AuthContext.Provider value={{authState, authDispatch}}>
        {children}
    </AuthContext.Provider>
}

const useAuth = () => useContext(AuthContext);

export {AuthProvider, useAuth};