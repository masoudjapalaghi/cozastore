export const orderReducers = (state = {}, action) => {
    switch (action.type) {
      case "SET_ORDER":
        return { ...action.payload };
      case "CLEAR_ORDER":
        return { ...action.payload };
      default:
        return state;
    }
  };
  