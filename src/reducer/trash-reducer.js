const trashReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TRASH": {
      return {
        ...state,
        trash: action.payload,
      };
    }
    case "MOVE_TO_TRASH": {
      return {
        ...state,
        trash: action.payload,
      };
    }
    case "RESTORE_FROM_TRASH": {
      return {
        ...state,
        trash: action.payload,
      };
    }
    case "DELETE_FROM_TRASH": {
      return {
        ...state,
        trash: action.payload,
      };
    }
    default:
      return state;
  }
};
export { trashReducer };
