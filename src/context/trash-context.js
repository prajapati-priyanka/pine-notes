import { createContext, useContext, useReducer } from "react";
import { trashReducer } from "../reducer/trash-reducer";
import { useAuth } from "./auth-context";
import axios from "axios";
import { useNote } from "./notes-context";
import { toast } from "react-toastify";


const trashInitialState = {
  trash: [],
};

const TrashContext = createContext();

const TrashProvider = ({ children }) => {
  const [trashState, trashDispatch] = useReducer(
    trashReducer,
    trashInitialState
  );

  const { authState } = useAuth();
  const { notesDispatch } = useNote();
  const token = authState.token || localStorage.getItem("token");

  // get all trashed notes

  const getAllTrashNotesHandler = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `/api/trash`,
        headers: { authorization: token },
      });

      if (response.status === 200) {
        trashDispatch({ type: "UPDATE_TRASH", payload: response.data.trash });
      } else {
        throw new Error("Can't process the request");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // move notes to trash

  const moveToTrashHandler = async (notes) => {
    try {
      const response = await axios({
        method: "POST",
        url: `/api/notes/trash/${notes._id}`,
        headers: { authorization: token },
      });

      if (response.status === 201) {
        trashDispatch({ type: "MOVE_TO_TRASH", payload: response.data.trash });
        notesDispatch({
          type: "DELETE_FROM_NOTE",
          payload: response.data.notes,
        });
        toast.success("Note is moved to trash");
      } else {
        throw new Error("Can't process the request");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //   restore notes from trash

  const restoreFromTrashHandler = async (notes) => {
    try {
      const response = await axios({
        method: "POST",
        url: `/api/trash/restore/${notes._id}`,
        headers: { authorization: token },
      });

      if (response.status === 200) {
        trashDispatch({
          type: "RESTORE_FROM_TRASH",
          payload: response.data.trash,
        });
        notesDispatch({ type: "UPDATE_NOTES", payload: response.data.notes });
        toast.success("Note restored from trash");
      } else {
        throw new Error("Can't process the request");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //  delete notes from trash

  const deleteFromTrashHandler = async (notes) => {
    try {
      const response = await axios({
        method: "DELETE",
        url: `/api/trash/delete/${notes._id}`,
        headers: { authorization: token },
      });

      if (response.status === 200) {
        trashDispatch({
          type: "DELETE_FROM_TRASH",
          payload: response.data.trash,
        });
        toast.error("Note is deleted from trash");
      } else {
        throw new Error("Can't process the request");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TrashContext.Provider
      value={{
        trashState,
        trashDispatch,
        getAllTrashNotesHandler,
        moveToTrashHandler,
        restoreFromTrashHandler,
        deleteFromTrashHandler,
      }}
    >
      {children}
    </TrashContext.Provider>
  );
};

const useTrash = () => useContext(TrashContext);

export { TrashProvider, useTrash };
