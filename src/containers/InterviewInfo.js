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

function InterviewInfo(props) {
    if (!props.interview) {
        return <p>Loading...</p>
    }

    return (
        <Wrapper>
            <Title>
                <div>
                    <h1>Interview Info</h1>
                    <p>Company: {props.interview.company_name}</p>
                    <p>Location: {props.interview.location}</p>
                    <p>Position: {props.interview.position}</p>
                    <p>Salary: {props.interview.salary}</p>
                    <p>Day: {props.interview.day}</p>
                </div>
            </Title>
        </Wrapper>
    )
}

const mapStateToProps = (state, props) => {
    const id = parseInt(props.match.params.id)
    const interview = state.interviewsReducer.interviews.find(interview => interview.id === id)
    return {
        interview
    }
}

export default connect(mapStateToProps)(InterviewInfo)