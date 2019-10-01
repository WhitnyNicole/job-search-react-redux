const fetchInterviews = (interviews) => {
    return {
        type: 'FETCH_INTERVIEWS_SUCCESS', 
        interviews  
    }
}

export const getInterviews = () => {
    return function(dispatch) {
    return fetch(`http://localhost:3001/interviews`)
        .then(res => res.json())
        .then(interviews => dispatch(fetchInterviews(interviews)))
    };
};

export const createInterview = (interviewObject) => {
    const interviewToCreate = { interview: interviewObject };
    return dispatch => {
            fetch(`http://localhost:3001/interviews`, {
                method: 'POST',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({interviewToCreate})
            })
            .then(res => res.json())
            .then(interview => 
                dispatch({
                    type: 'INTERVIEW_CREATE_SUCCESS', 
                    payload: interview
                })
            )
        }
}