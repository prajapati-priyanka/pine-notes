import { addNoteService } from "../../services/addNoteService";
import { toast } from "react-toastify";

export const addNoteHandler = async (e,token, notes, notesDispatch) => {
  e.preventDefault();
    
  try {
      const response = await addNoteService(notes, token);

      if (response.status === 201) {
        localStorage.setItem("notes", JSON.stringify(response.data.notes));
        notesDispatch({ type: "ADD_NOTE", payload: response.data.notes });
        toast.success("New note added succesfully");
      } else {
        throw new Error("Can't Process Request");
      }
    } catch (error) {
      console.log(error);
    }
  }
