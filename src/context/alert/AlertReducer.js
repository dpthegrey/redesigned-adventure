const alertReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALERT":
      return {
        msg: action.payload.msg,
        type: action.payload.type,
      };
    case "CLEAR_ALERT":
      return { msg: null, type: null };
    default:
      return state;
  }
};
