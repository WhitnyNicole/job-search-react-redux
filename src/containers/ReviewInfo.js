import React from 'react'
import { connect } from 'react-redux'

function ReviewInfo(props) {
    if (!props.review) {
        return <p>Loading...</p>
    }
    return (
        <div>
            <h1>Review Info</h1>
            {props.review.inquiry}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    debugger
    const review = state.reviews.filter(review => review.id === id)[0]
    console.log(props.review)
    return {
        review,
    }
}

export default connect(mapStateToProps)(ReviewInfo)
