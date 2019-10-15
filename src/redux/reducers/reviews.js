export default (state = { reviews: [] }, action) => {
    switch(action.type) {
        case "FETCH_REVIEWS_SUCCESS":
            return {...state, reviews: [...state.reviews, ...action.reviews] }
        case "REVIEW_CREATE_SUCCESS":
            return {...state, reviews: [...state.reviews, action.payload] }
        default: 
            return state;
    }
}