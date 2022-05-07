import { createContext,useContext,useReducer } from "react";
import { trashReducer } from "../reducer/trash-reducer";
import { useAuth } from "./auth-context";
import axios from "axios";


const trashInitialState  ={
    trash:[]
}


const TrashContext = createContext();


const TrashProvider = ({children}) =>{

const [trashState, trashDispatch] = useReducer(trashReducer, trashInitialState);

const {authState} = useAuth();
const token = authState.token || localStorage.getItem("token");


const getTrashData = async() =>{
    try {
    const response = await axios.get("/api/trash", {headers: {authorization: token}})
        if(response === 200){
            trashDispatch({type:"UPDATE_TRASH", payload: response.data.trash})
        }
    } catch (error) {
        console.log(error)
    }
}

    return <TrashContext.Provider value={{trashState, trashDispatch,getTrashData}}>
        {children}
    </TrashContext.Provider>
}

const useTrash = () => useContext(TrashContext);

export{TrashProvider, useTrash}