import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from "styled-components"
import NewReview from "../components/NewReview"

const Title = styled.h1`
  font-size: 15px;
  text-align: center;
  color: black;
`;

const Wrapper = styled.section`
  padding: 4em;
`;

class InterviewInfo extends Component {

    render() {
        const { interview, loading } = this.props  
        if (loading && !interview) {
            return <h1>Loading...</h1>
        }
        if (!loading && !interview) {
            return <h1> No Interview Yet!</h1>
        }

        return (
            <Wrapper>
                <Title>
                    <div>
                        <h1>Interview Info</h1>
                        <p>Company: {interview.company_name}</p>
                        <p>Location: {interview.location}</p>
                        <p>Position: {interview.position}</p>
                        <p>Salary: {interview.salary}</p>
                        <p>Date: {interview.pretty_created_date}</p>
                        <NewReview interviewId={interview.id} history={this.props.history}/>
                    </div>
                </Title>
            </Wrapper>
        )
    }
}

const mapStateToProps = (state, props) => {
    const id = parseInt(props.match.params.id)
    const interview = state.interviewsReducer.interviews.find(interview => interview.id === id)
    return {
        interview,
        loading: state.loading
    }
}

export default connect(mapStateToProps)(InterviewInfo);