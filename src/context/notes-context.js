import { createContext, useContext, useReducer, useState } from "react";
import { notesReducer } from "../reducer/notes-reducer";

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

  return (
    <NotesContext.Provider
      value={{
        notesState,
        notesDispatch,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

const useNote = () => useContext(NotesContext);

export { NotesProvider, useNote };
