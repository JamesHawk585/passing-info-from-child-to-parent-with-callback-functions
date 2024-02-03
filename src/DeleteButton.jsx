import React from 'react'



// onDeleteTask is currently an undefined callback function. It must be declared in ParticipantCard,jsx and imported prior to use. 

const DeleteButton = ({ onDeleteParticipant, participant }) => {
    console.log(participant)
    // Participant is undefined 
  return (
    <button onClick={() => onDeleteParticipant(participant.id)}>Delete</button>
  )
}

export default DeleteButton