import React, { useState } from 'react';
import { LinearWithValueLabel } from './components/Loader/Loader';
import imgComplete from './img/complete.png';
import './App.css';

function App() {
  const [loadComplete, setLoadComplete] = useState<boolean>(false);

  return (
    <div className="App">
      {loadComplete && (
        <img style={{ width: '50px' }} src={imgComplete} alt="complete"></img>
      )}
      <LinearWithValueLabel setLoadComplete={setLoadComplete} />
    </div>
  );
}

export default App;
