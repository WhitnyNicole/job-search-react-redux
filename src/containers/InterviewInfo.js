import React from 'react'
import { isFlow } from '@babel/types'

// const InterviewInfo = ({ interview }) => {
//     return (
//         interview ?
//             <div>
//                 <h2>{interview.company_name}</h2>
//                 <p>{interview.location}</p>
//                 <p>{interview.position}</p>
//             </div> :
//             <p>No interview info yet! </p>
//     )
// }

const InterviewInfo = (props) => {
    debugger

//    info = props.interviews.find(interview => interview.id === props.match.params.id)

//if else 
//handle cases when no object is found
//set variable outside of the if/else 

//flow of redux: component -> action -> rails and then rails -> action -> reducer -> state/store component

    return (
        <div>
            <p>No interview info yet! </p>
        </div>
    )
}

export default InterviewInfo

// props.match.params.id
//props.match.url