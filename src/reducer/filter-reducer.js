export const filterReducer =(state,action)=>{

  switch (action.type) {
      case "UPDATE_PRIORITY":
          return{
              ...state,
              labels: [...state.labels],
              priority: action.payload.priority
          }
      case "SORT_BY_DATE":
          return{
              ...state,
              labels: [...state.labels],
              sortByDate: action.payload.sortByDate
          }
      
      case "SET_LABEL":
         
          return{
              ...state,
              labels: [...state.labels, action.payload]
          }
      
      case "UNSET_LABEL":
         
          return{
              ...state,
              labels: state.labels.filter(label => label !== action.payload)
          }
      case "SET_SEARCH_VALUE":
         
          return{
              ...state,
              searchValue: action.payload.searchValue
          }

      case "CLEAR_ALL":
         
          return {
              ...state,
            sortByDate: null,
            priority: null,
            labels:[],
          }
      
       
      
          
         
  
      default:
          return state;
  }
}