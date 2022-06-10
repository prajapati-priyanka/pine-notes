import { getAllNotesService } from "../../services/getAllNotesService";

export const getAllNotesHandler = async(token,notesDispatch)=>{
    try {
      const response = await getAllNotesService(token)
      if(response.status === 200){
          notesDispatch({type:"UPDATE_NOTES", payload: response.data.notes})
      }else{
        throw new Error("Can't Process Request");
      }
      
    } catch (error) {
      console.log(error)
    }
  }
