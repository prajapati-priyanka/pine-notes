const trashReducer = (state,action) =>{
    switch(action.type){
       case "UPDATE_TRASH":{
           return {
               ...state,
               trash: action.payload
           }
       }
    }
}
export {trashReducer}
