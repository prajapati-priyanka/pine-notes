import axios from "axios";

export const getAllNotesService = (token)=>{
    return axios.get("/api/notes", {
              headers: { authorization: token },
            });
      
}
