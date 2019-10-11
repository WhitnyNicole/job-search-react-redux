import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class ReviewsList extends Component {

    render() {
        let reviewsList;
        if (this.props.reviews.length === 0) {
            return <p>Loading...</p>
        } else{
            reviewsList = this.props.reviews.map(review => {
               return ( <p key={review.id}>
                    <Link to={`/reviews/${review.id}`}>{review.interview.company_name} - {review.inquiry}</Link>
                </p>
               )
            })
        }

        return (
            <div>
                <h1> Reviews List</h1>
                {reviewsList}
            </div>
        )   
    }
}

const mapStateToProps = (state) => {
    return {
        reviews: state.reviewsReducer.reviews
    }
}

export default connect(mapStateToProps)(ReviewsList);