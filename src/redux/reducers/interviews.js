export default (state = [], action) => {
    switch(action.type) {
        case "FETCH_INTERVIEWS_SUCCESS":
            return action.reviews
        case "INTERVIEW_CREATE_SUCCESS":
            return [...state, action.payload];
        default: 
            return state;
    }
}