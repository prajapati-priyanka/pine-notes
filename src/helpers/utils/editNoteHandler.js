import { editNoteService } from "../../services/editNoteService";
import { toast } from "react-toastify";

export const editNoteHandler = async (token, notes, notesDispatch) => {

  try {
    const response = await editNoteService(notes, token);
    if (response.status === 201) {
      notesDispatch({ type: "ADD_NOTE", payload: response.data.notes });
       toast.success("Note edited successfully");
    } else {
      throw new Error("Can't Process Request");
    }
  } catch (error) {
    console.log(error);
  }
};
