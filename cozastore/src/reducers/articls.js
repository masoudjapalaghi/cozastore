export const articlsReducer = (state =[], action) => {
    switch (action.type) {
        case "INIT_ARTICLS":
            return [...action.payload];
        default:
            return state;
    }
  };