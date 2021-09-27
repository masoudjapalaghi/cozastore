export const productsReducer = (state =[], action) => {
  switch (action.type) {
      case "INIT_PRODUCTS":
          return [...action.payload];
      default:
          return state;
  }
};
