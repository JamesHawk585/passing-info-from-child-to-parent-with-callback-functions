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

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then(setRoster);
  }, []);

  // useContext() on signed up roster. Wrap SignedUpRoster in useCOntext() provider.

  return (
    <div className="App">
      <header className='App-Header'>Sign-Up</header>
      <body className="App-body">
        <FormContainer />
        <rosterContext.Provider value={roster}>
          <SignedUpRoster onDeleteParticipant={onDeleteParticipant}/>
        </rosterContext.Provider>
      </body>
    </div>
  );
}

export default App;
