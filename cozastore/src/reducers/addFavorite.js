export const favReducers = (state = [], action) => {
  switch (action.type) {
    case "SET_FAVORITE":
      const product = state.find((item) => item.id === action.payload.id);
      if (product) {
        const products = state.filter((item) => item.id !== action.payload.id);
        return [...products, product];
      }
      return [...state, action.payload];
    case "CLEAR_FAVORITE":
        return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};
