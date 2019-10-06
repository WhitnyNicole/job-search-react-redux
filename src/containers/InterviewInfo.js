import React from 'react'

const InterviewInfo = ({ interview }) => {
    return (
        interview ?
            <div>
                <h2>{interview.company_name}</h2>
                <p>{interview.location}</p>
                <p>{interview.position}</p>
            </div> :
            <p>No interview info yet! </p>
    )
}

export default InterviewInfo