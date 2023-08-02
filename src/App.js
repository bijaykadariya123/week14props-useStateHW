import logo from './logo.svg';
import './App.css';
import Displaypage from './components/Display';
import ControlledForm from './components/Form';

import {useState} from "react"

function App() {

  const [question, setQuestion]=useState({
    // askQuestion:"",
  })
  return (
    <div className="App">
      <ControlledForm setQuestionIs={setQuestion}/>
      <Displaypage questionIs={question}/>


    </div>
  );
}

export default App;
