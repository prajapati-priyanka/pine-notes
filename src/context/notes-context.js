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

  const [pinnedNotes, setPinnedNotes] = useState([]);
  // const [unpinnedNotes, setUnpinnedNotes] = useState([]);
 
    const [notesState, notesDispatch] = useReducer(
    notesReducer,
    notesInitialState
  );
 const navigate = useNavigate();
  const { authState } = useAuth();

  const token = authState.token || JSON.parse(localStorage.getItem("token"));

  const createNote = async (e,notesContent,setNoteContent) => {
      e.preventDefault();
      if(notesContent.title !== "" && notesContent.content !== ""){
        try {
          if(authState.token){
              const response = await axios.post(
                  "/api/notes",
                  { note:notesContent },
                  { headers: { authorization: token } }
                );
               console.log(response)
                if(response.status === 201){
                    localStorage.setItem("notes", JSON.stringify(response.data.notes));
                    notesDispatch({type: "ADD_NOTE",  payload: response.data.notes});
                    setNoteContent({title: "", content: ""})
  
                }else{
                    throw new Error("Can't Process Request")
                }
          
              }else{
                  navigate('/')
              }
          }
         catch (error) {
        console.log(error);
      }
      }else{
        alert("Title and content cannot be empty")
      }
    
   
  };

  const getNotesData = async() =>{
    try {

      const response = await axios.get("/api/notes",  { headers: { authorization: token } });
      if(response.status === 200){
        notesDispatch({type: "ADD_NOTES", payload: response.data.notes})
      }
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <NotesContext.Provider value={{ notesState, notesDispatch, createNote, getNotesData,pinnedNotes, setPinnedNotes}}>
      {children}
    </NotesContext.Provider>
  );
};

const useNote = () => useContext(NotesContext);

export { NotesProvider, useNote }
