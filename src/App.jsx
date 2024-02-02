import logo from './logo.svg';
import './App.css';
import FormContainer from './FormContainer';
import SignedUpRoster from './SignedUpRoster';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormContainer/>
        <SignedUpRoster/>
      </header>
    </div>
  );
}

export default App;
