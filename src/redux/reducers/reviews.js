export default (state = [], action) => {
    switch(action.type) {
        case "FETCH_REVIEWS_SUCCESS":
            return action.reviews
        case "REVIEW_CREATE_SUCCESS":
            return [...state, action.payload];
        default: 
            return state;
    }
}