import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from "styled-components"


const Title = styled.h1`
  font-size: 15px;
  text-align: center;
  color: black;
`;

const Wrapper = styled.section`
  padding: 4em;
`;

class InterviewsList extends Component {

    render() {
        let interviewsList;
        if (this.props.interviews.length === 0) {
            return <p>Loading...</p>
        } else{
            interviewsList = this.props.interviews.map(interview => {
               return ( <p key={interview.id}>
                    <Link to={`/interviews/${interview.id}`}>{interview.company_name}</Link>
                </p>
               )
            })
        }

        return (
            <Wrapper>
                <Title>
                    <div>
                        <h1> Interview List</h1>
                        {interviewsList}
                    </div>
                </Title>
            </Wrapper>
        )   
    }
}

const mapStateToProps = (state) => {
    return {
        interviews: state.interviewsReducer.interviews
    }
}

export default connect(mapStateToProps)(InterviewsList);