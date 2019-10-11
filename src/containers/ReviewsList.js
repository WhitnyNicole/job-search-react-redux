import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class ReviewsList extends Component {

    render() {
        if (this.props.reviews.length === 0) {
            return <p>Loading...</p>
        }
        return (
            <div>
                <h1> Review List</h1>
                {this.props.reviews.map(review => (
                    <p key={review.id}>
                        <Link to={`/reviews/${review.id}`}>{review.inquiry}</Link>
                    </p>
                ))}
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