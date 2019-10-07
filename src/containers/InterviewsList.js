import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'
import InterviewInfo from './InterviewInfo.js'

class InterviewsList extends Component {

    render() {
        if (this.props.interviews.length == 0) {
            return <p>Loading...</p>
        }
        return (
            <div>
                <h1> Interviews List </h1>
                {this.props.interviews.map(interview => (<p key={interview.id}><Link to={`/interviews/${interview.id}`}>{interview.company_name}: {interview.position}</Link></p>
                ))}
        <Route path={`${this.props.match.url}/:interviewId`} render={(routerProps) => <InterviewInfo {...routerProps}/>}/>
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