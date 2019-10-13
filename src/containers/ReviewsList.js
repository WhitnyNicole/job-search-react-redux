import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from "styled-components"

const Title = styled.h1`
  font-size: 15px;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: seashell;
`;

class ReviewsList extends Component {

    render() {
        let reviewsList;
        if (this.props.reviews.length === 0) {
            return <p>Loading...</p>
        } else{
            reviewsList = this.props.reviews.map(review => {
               return ( <p key={review.id}>
                    {review.interview.company_name}: <Link to={`/reviews/${review.id}`}>{review.inquiry}</Link>
                </p>
               )
            })
        }

        return (
            <Wrapper>
                <Title>
                    <div>
                        <h1> Reviews List</h1>
                        {reviewsList}
                    </div>
                </Title>
            </Wrapper>
        )   
    }
}

const mapStateToProps = (state) => {
    return {
        reviews: state.reviewsReducer.reviews
    }
}

export default connect(mapStateToProps)(ReviewsList);