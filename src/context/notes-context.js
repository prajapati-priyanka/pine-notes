import { createContext, useContext, useReducer, useState } from "react";
import { notesReducer } from "../reducer/notes-reducer";
import { useAuth } from "../context/auth-context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const notesInitialState = {
  notes: [],
};

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [notesState, notesDispatch] = useReducer(
    notesReducer,
    notesInitialState
  );
  const navigate = useNavigate();
  const { authState } = useAuth();

  const token = authState.token || JSON.parse(localStorage.getItem("token"));

  const createNote = async (
    e,
    notesContent,
    setNoteContent,
    setCreateNoteModalVisible
  ) => {
    e.preventDefault();
    if (notesContent.title !== "" && notesContent.content !== "") {
      try {
        if (authState.token) {
          const response = await axios.post(
            "/api/notes",
            { note: notesContent },
            { headers: { authorization: token } }
          );
          console.log("in notes-context", response);
          if (response.status === 201) {
            localStorage.setItem("notes", JSON.stringify(response.data.notes));
            notesDispatch({ type: "ADD_NOTE", payload: response.data.notes });
            setNoteContent({ title: "", content: "", priority: "" });
            setIsOpen(false);
            toast("New note added succesfully", { icon: "✔️" });
          } else {
            throw new Error("Can't Process Request");
          }
        } else {
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Title and content cannot be empty");
    }
  };

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

  const editNote = async (e, notesContent, setNoteContent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `/api/notes/${notesContent._id}`,
        { note: notesContent },
        {
          headers: { authorization: token },
        }
      );
      if (response.status === 201) {
        notesDispatch({ type: "ADD_NOTE", payload: response.data.notes });
        setNoteContent({ title: "", content: "", priority: "" });
        setIsOpen(false);
        setIsEditing(false);
        toast("Note edited successfully", { icon: "✔️" });
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
        createNote,
        getNotesData,
        isOpen,
        setIsOpen,
        isEditing,
        setIsEditing,
        editNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

const useNote = () => useContext(NotesContext);

export { NotesProvider, useNote };
