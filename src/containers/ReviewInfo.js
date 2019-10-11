import React from 'react'
import { connect } from 'react-redux'

function ReviewInfo(props) {
    if (!props.review) {
        return <p>Loading...</p>
    }
    return (
        <div>
            <h1>Review Info</h1>
            <p>Inquiry: {props.review.inquiry}</p>
            <p>Answer: {props.review.answer}</p>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const id = parseInt(props.match.params.id)
    const review = state.reviewsReducer.reviews.find(review => review.id === id)
    console.log(props.review)
    return {
        review
    }
}

export default connect(mapStateToProps)(ReviewInfo)
