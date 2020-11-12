import  React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [age, setAge] = useState(22)

  return (
    <div className="App">
      <header className="App-header">
        <p></p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
