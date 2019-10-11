import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class InterviewsList extends Component {

    render() {
        if (this.props.interviews.length === 0) {
            return <p>Loading...</p>
        }
       
        return (
            <div>
                <h1> Interview List</h1>
                {this.props.interviews.map(interview => (
                    <p key={interview.id}>
                        <Link to={`/interviews/${interview.id}`}>{interview.company_name}</Link>
                    </p>
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