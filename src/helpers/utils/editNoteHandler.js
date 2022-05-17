import { editNoteService } from "../../services/editNoteService";
import toast from "react-hot-toast";

export const editNoteHandler = async (e,token, notes, notesDispatch) => {
    e.preventDefault();

  try {
    const response = await editNoteService(notes, token);
    if (response.status === 201) {
      notesDispatch({ type: "ADD_NOTE", payload: response.data.notes });
       toast("Note edited successfully", { icon: "✔️" });
    } else {
      throw new Error("Can't Process Request");
    }
  } catch (error) {
    console.log(error);
  }
};
