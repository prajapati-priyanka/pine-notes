import axios from "axios";

export const addNoteService = (notes, token) =>{
    return  axios.post(
        "/api/notes",
        { note: notes },
        { headers: { authorization: token } }
      );
}