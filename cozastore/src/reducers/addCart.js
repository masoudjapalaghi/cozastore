export const cartReducers = (state = [], action) => {
  switch (action.type) {
    case "ADD_CART":
      action.payload.quantity = 1;
      return [...state, action.payload];
    case "CLEAR_CART":
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};
