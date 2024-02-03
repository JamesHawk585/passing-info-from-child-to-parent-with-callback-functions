import "./App.css";
import FormContainer from "./FormContainer";
import SignedUpRoster from "./SignedUpRoster";
import { useState, useEffect, createContext } from "react";

const API = "http://127.0.0.1:5555/users";

export const rosterContext = createContext();

function App() {
  const [roster, setRoster] = useState([]);

  const onDeleteParticipant = (particpantId) => {
    setRoster(roster.filter(participant => participant.id !== particpantId))}

  const onAddParticipantToRoster = (e) => {
    console.log('Adding participant...😎')
    console.log(e.target.value)
  }

  // e.target.value returns undefined. May be because SubmitButton is in it's own child component of the App.jsx parent. 

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then(setRoster);
  }, []);

  return (
    <div className="App">
      <header className='App-Header'>Sign-Up</header>
      <body className="App-body">
        <FormContainer onAddParticipantToRoster={onAddParticipantToRoster}/>
        <rosterContext.Provider value={roster}>
          <SignedUpRoster onDeleteParticipant={onDeleteParticipant}/>
        </rosterContext.Provider>
      </body>
    </div>
  );
}

export default App;
