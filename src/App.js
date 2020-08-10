import React, { useState } from 'react';
import './css/App.css';
import WelcomePage from './components/WelcomePage';

function App() {
  const [clicked, wasClicked] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        This is a header.
      </header>
      <WelcomePage clicked={clicked} onClick={() => wasClicked(true)}/>
    </div>
  );
}

export default App;
