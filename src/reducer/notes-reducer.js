const notesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE": {
      return {
        ...state,
        notes: action.payload,
      };
    }
    case "DELETE_FROM_NOTE": {
      return {
        ...state,
        notes: action.payload,
      };
    }
    case "UPDATE_NOTES": {
      return {
        ...state,
        notes: action.payload,
      };
    }

    default:
      return state;
  }
};

export { notesReducer };
