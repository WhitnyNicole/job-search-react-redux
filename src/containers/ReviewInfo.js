import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from "styled-components"

const Title = styled.h1`
  font-size: 15px;
  text-align: center;
  color: black;
`;

const Wrapper = styled.section`
  padding: 4em;
`;

class ReviewInfo extends Component {

    render() {
        const { review, loading } = this.props  
        if (loading && !review) {
            return <h1>Loading...</h1>
        }
        if (!loading && !review) {
            return <h1> No Review Yet!</h1>
        }

        return (
            <Wrapper>
                <Title>
                    <div>
                        <h1>{review.interview.company_name} Review</h1>
                        <p>Inquiry: {review.inquiry}</p>
                        <p>Answer: {review.answer}</p>
                    </div>
                </Title>
            </Wrapper>
       )
    }
}

const mapStateToProps = (state, props) => {
    const id = parseInt(props.match.params.id)
    const review = state.reviewsReducer.reviews.find(review => review.id === id)
    return {
        review,
        loading: state.loading

    }
}

export default connect(mapStateToProps)(ReviewInfo)
