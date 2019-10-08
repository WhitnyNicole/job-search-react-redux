import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'
import ReviewInfo from  './ReviewInfo.js'

class ReviewsList extends Component {

    render() {
        if (this.props.reviews.length == 0) {
            return <p>Loading...</p>
        }
        return (
            <div>
                <h1> Reviews List </h1>
                {this.props.reviews.map(review => (<p key={review.id}><Link to={`/reviews/${review.id}`}>{review.interview.company_name}:{review.inquiry}</Link></p>
                ))}
                <Route path={`${this.props.match.url}/:reviewId`} render={(routerProps) => <ReviewInfo {...routerProps}/>}/>
            </div>
        )      
    }
}

const mapStateToProps = (state) => {
    return {
        reviews: state.reviews
    }
}

export default connect(mapStateToProps)(ReviewsList);