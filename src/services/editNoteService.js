import axios from "axios";

export const editNoteService = (notes,token)=>{
    return axios.post(
        `/api/notes/${notes._id}`,
        { note: notes },
        {
          headers: { authorization: token },
        }
      );
}