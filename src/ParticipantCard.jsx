import React from "react";
import DeleteButton from "./DeleteButton";
import "./App.css";

const ParticipantCard = ({ participant, onDeleteParticipant }) => {
console.log(participant)
const {firstName, lastName, Id} = participant
console.log(lastName)

  return (
    <div className="participantCard">
      <h2>{participant.firstName + " " + participant.lastName}</h2>
      <p>Date of Birth: {participant.dateOfBirth}</p>
      <DeleteButton onDeleteParticipant={onDeleteParticipant} participant={participant}/>
    </div>
  );
};

export default ParticipantCard;


 