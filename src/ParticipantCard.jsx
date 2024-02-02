import React from 'react'
import DeleteButton from './DeleteButton'
import "./App.css";


const ParticipantCard = ({participant}) => {
    // <h2> Name
    // <DeleteParticipantCard/>
  return (
    <div className='participantCard'>
    <h2>{participant.firstName + ' ' + participant.lastName}</h2>
    <p>{participant.dateOfBirth}</p>
    <DeleteButton/>
    </div>
  )
}

export default ParticipantCard