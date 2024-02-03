import React from "react";
import { useContext } from "react";
import { rosterContext } from "./App";
import ParticipantCard from "./ParticipantCard";

const SignedUpRoster = ({ onDeleteParticipant }) => {
  const roster = useContext(rosterContext);
  console.log("inside SignedUpRoster:", roster);


//   Move styling to external css sheet. 
  return (
    <>
      {roster.map((participant, index) => (
        <div style={{ marginBottom: "10px" }}>
          <ParticipantCard key={index} participant={participant} onDeleteParticipant={onDeleteParticipant}/>
        </div>
      ))}
    </>
  );
};

export default SignedUpRoster;
