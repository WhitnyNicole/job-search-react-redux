export default (state = { interviews: [] }, action) => {
    switch(action.type) {
        case "FETCH_INTERVIEWS_SUCCESS":
            return {...state, interviews: [...state.interviews, ...action.interviews] }
        case "INTERVIEW_CREATE_SUCCESS":
            return {...state, interviews: [...state.interviews, action.payload] };
        default: 
            return state;
    }
}