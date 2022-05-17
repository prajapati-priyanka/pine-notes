import { createContext, useContext, useReducer, useState } from "react";
import { notesReducer } from "../reducer/notes-reducer";
import { useAuth } from "../context/auth-context";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const notesInitialState = {
  notes: [],
};

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const [notesState, notesDispatch] = useReducer(
    notesReducer,
    notesInitialState
  );

  const { authState } = useAuth();

  const token = authState.token || JSON.parse(localStorage.getItem("token"));

const getAllNotesHandler = async()=>{
  try {
    const response = await axios.get("/api/notes",  { headers: { authorization: token } })
    console.log(response)
    if(response.status === 200){
        notesDispatch({type:"UPDATE_NOTES", payload: response.data.notes})
    }else{
      throw new Error("Can't Process Request");
    }
    
  } catch (error) {
    console.log(error)
  }
}


  const getNotesData = async () => {
    try {
      const response = await axios.get("/api/notes", {
        headers: { authorization: token },
      });
      if (response.status === 200) {
        notesDispatch({ type: "ADD_NOTES", payload: response.data.notes });
      } else {
        throw new Error("Can't Process Request");
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <NotesContext.Provider
      value={{
        notesState,
        notesDispatch,
        getNotesData,
        isOpen,
        setIsOpen,
       getAllNotesHandler
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

const useNote = () => useContext(NotesContext);

export { NotesProvider, useNote };
