import React from "react";
import FirstNameInput from "./FirstNameInput";
import LastNameInput from "./LastNameInput";
import DateOfBirthInput from "./DateOfBirthInput";
import SubmitButton from "./SubmitButton";

import "./App.css";



const FormContainer = ({ onAddParticipantToRoster }) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddParticipantToRoster(e)
  }
  return (
    <div id="formInputContainer">
      <form id="inputForm" onSubmit={handleSubmit}>
        <FirstNameInput />
        <LastNameInput />
        <DateOfBirthInput />
        <SubmitButton />
      </form>
    </div>
  );
};

export default FormContainer;
