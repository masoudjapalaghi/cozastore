export const articleReducer = (state = {}, action) => {
    switch (action.type) {
        case "GET_ARTICLE":
            return { ...action.payload };
        default:
            return state;
    }
};
