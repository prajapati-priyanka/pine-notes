import { createContext, useContext, useReducer } from "react";
import { archiveReducer } from "../reducer/archive-reducer";
import { useAuth } from "./auth-context";
import { useNote } from "./notes-context";
import axios from "axios";
import { toast } from "react-toastify";

const archiveInitialState = {
  archive: [],
};

const ArchiveContext = createContext();

const ArchiveProvider = ({ children }) => {
  const [archiveState, archiveDispatch] = useReducer(
    archiveReducer,
    archiveInitialState
  );
  const { authState } = useAuth();
  const { notesDispatch } = useNote();
  const token = authState.token || localStorage.getItem("token");

  // get all archived notes

  const getAllArchivedNotesHandler = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `/api/archives`,
        headers: { authorization: token },
      });
      if (response.status === 200) {
        archiveDispatch({
          type: "UPDATE_ARCHIVE",
          payload: response.data.archives,
        });
      } else {
        throw new Error("Can't process the request");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // move notes to archive

  const moveToArchiveHandler = async (notes) => {
    try {
      const response = await axios({
        method: "POST",
        url: `/api/notes/archives/${notes._id}`,
        headers: { authorization: token },
      });

      if (response.status === 201) {
        archiveDispatch({
          type: "MOVE_TO_ARCHIVE",
          payload: response.data.archives,
        });
        notesDispatch({
          type: "DELETE_FROM_NOTE",
          payload: response.data.notes,
        });
        toast.success("Note is moved to archive");
      } else {
        throw new Error("Can't process the request");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //   restore notes from archive

  const restoreFromArchiveHandler = async (notes) => {
    try {
      const response = await axios({
        method: "POST",
        url: `/api/archives/restore/${notes._id}`,
        headers: { authorization: token },
      });

      if (response.status === 200) {
        archiveDispatch({
          type: "RESTORE_FROM_ARCHIVE",
          payload: response.data.archives,
        });
        notesDispatch({ type: "UPDATE_NOTES", payload: response.data.notes });
        toast.success("Note restored from archive");
      } else {
        throw new Error("Can't process the request");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //  delete notes from archive

  const deleteFromArchiveHandler = async (notes) => {
    try {
      const response = await axios({
        method: "DELETE",
        url: `/api/archives/delete/${notes._id}`,
        headers: { authorization: token },
      });
      console.log(response);
      if (response.status === 200) {
        archiveDispatch({
          type: "DELETE_FROM_ARCHIVE",
          payload: response.data.archives,
        });
        toast.error("Note is deleted from archive");
      } else {
        throw new Error("Can't process the request");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ArchiveContext.Provider
      value={{
        archiveState,
        archiveDispatch,
        getAllArchivedNotesHandler,
        moveToArchiveHandler,
        restoreFromArchiveHandler,
        deleteFromArchiveHandler,
      }}
    >
      {children}
    </ArchiveContext.Provider>
  );
};

const useArchive = () => useContext(ArchiveContext);

export { ArchiveProvider, useArchive };
