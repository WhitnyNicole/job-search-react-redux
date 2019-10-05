import React, { Component } from 'react'
import { connect } from 'react-redux'

class InterviewsList extends Component {

    render() {
        if (this.props.interviews.length == 0) {
            return <p>Loading...</p>
        }
        return (
            <div>
                <h1> Interviews List </h1>
                {this.props.interviews.map(interview => (
                    <p>{interview.company_name}</p>
                ))}
            </div>
        )      
    }
}

const mapStateToProps = (state) => {
    return {
        interviews: state.interviews
    }
}

export default connect(mapStateToProps)(InterviewsList);