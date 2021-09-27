export const iconFavReducers = (state = [], action) => {
    switch (action.type) {
      case "SET_ICONFAVORITE":
        const productId = state.find((item) => item === action.payload);
        if (productId) {
          const productsId = state.filter((item) => item !== action.payload);
          return [...productsId, productId];
        }
        return [...state, action.payload];
      case "CLEAR_ICONFAVORITE":
        return state.filter((item) => item !== action.payload);
      default:
        return state;
    }
  };
  