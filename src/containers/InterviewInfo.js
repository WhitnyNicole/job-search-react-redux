import React from 'react'
import { connect } from 'react-redux'

function InterviewInfo(props) {
    if (!props.interview) {
        return <p>Loading...</p>
    }
    return (
        <div>
            <h1>Interview Info</h1>
            <p>Company: {props.interview.company_name}</p>
            <p>Location: {props.interview.location}</p>
            <p>Position: {props.interview.position}</p>
            <p>Salary: {props.interview.salary}</p>
            <p>Day: {props.interview.day}</p>
        </div>
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