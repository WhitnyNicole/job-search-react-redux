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

// case "REVIEW_CREATE_SUCCESS":
// let interviews = state.interviews.map(interview => {
//     if (interview.id === action.payload.id) {
//     } else {
//         return interview
        // }
//    })
// return {...state, interviews: interviews}
//    default:
// return state;
// }
// }