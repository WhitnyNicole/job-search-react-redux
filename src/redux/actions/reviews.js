const fetchReviews = (reviews) => {
    return {
        type: 'FETCH_REVIEWS_SUCCESS', 
        reviews  
    }
}

export const getReviews = () => {
    return dispatch => {
    return fetch(`http://localhost:3001/api/v1/reviews`)
        .then(res => res.json())
        .then(reviews => dispatch(fetchReviews(reviews)))
    };
};

export const createReview = (reviewObject) => {
    const reviewToCreate = { review: reviewObject };
    return dispatch => {
            fetch(`http://localhost:3001/api/v1/reviews`, {
                method: 'POST',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({reviewToCreate})
            })
            .then(res => res.json())
            .then(review => 
                dispatch({
                    type: 'REVIEW_CREATE_SUCCESS', 
                    payload: review
                })
            )
        }
}