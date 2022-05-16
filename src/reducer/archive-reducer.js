export const archiveReducer = (state, action)=>{
    switch (action.type) {
        case "UPDATE_ARCHIVE": {
          return {
            ...state,
            archive: action.payload,
          };
        }
        case "MOVE_TO_ARCHIVE": {
            return {
              ...state,
              archive: action.payload,
            };
          }
          case "RESTORE_FROM_ARCHIVE": {
            return {
              ...state,
              archive: action.payload,
            };
          }
          case "DELETE_FROM_ARCHIVE": {
            return {
              ...state,
              archive: action.payload,
            };
          }
        default:
          return state;
      }
}