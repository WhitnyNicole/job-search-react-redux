import React, { Component } from 'react'
import { connect } from 'react-redux'

class ReviewsList extends Component {

    render() {
        if (this.props.reviews.length == 0) {
            return <p>Loading...</p>
        }
        return (
            <div>
                <h1> Reviews List </h1>
                {this.props.reviews.map(review => (
                    <p>{review.company_name}</p>
                ))}
            </div>
        )      
    }
}

const mapStateToProps = (state) => {
    return {
        reviews: state
    }
}

export default connect(mapStateToProps)(ReviewsList);