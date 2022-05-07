const notesReducer = (state, action)=>{
    switch (action.type) {
        case "ADD_NOTE":
            return{
                ...state,
                notes: action.payload
            }
            
           
    
        default:
            return state
    }
}

export {notesReducer}