import React from 'react'
import { connect } from 'react-redux'
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

function ReviewInfo(props) {
    if (!props.review) {
        return <p>Loading...</p>
    }
    return (
        <Wrapper>
            <Title>
                <div>
                    <h1>{props.review.interview.company_name} Review</h1>
                    <p>Inquiry: {props.review.inquiry}</p>
                    <p>Answer: {props.review.answer}</p>
                </div>
            </Title>
        </Wrapper>
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
