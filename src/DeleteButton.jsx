import React from 'react'

const DeleteButton = ({ onDeleteParticipant, participant }) => {

  return (
    <button onClick={() => onDeleteParticipant(participant.id)}>Delete</button>
  )
}

export default DeleteButton