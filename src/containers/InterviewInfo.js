import React from 'react'
import { connect } from 'react-redux'

function InterviewInfo(props) {
    if (!props.interview) {
        return <p>Loading...</p>
    }
    return (
        <div>
            <h1>Interview Info</h1>
            {props.interview.company_name}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    debugger
    const interview = state.interviews.filter(interview => interview.id === id)[0]
    console.log(props.interview)
    return {
        interview,
    }
}

export default connect(mapStateToProps)(InterviewInfo)