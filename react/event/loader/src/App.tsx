import React, { useState } from 'react';
import type { KeyboardEvent } from 'react';
import { LinearWithValueLabel } from './components/Loader/Loader';

import './App.css';

function App() {
  const [percent, setPercent] = useState(0);
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      setPercent((prev) => (prev + 1 > 100 ? prev : prev + 1));
      return;
    }
    if (event.key === 'ArrowLeft') {
      setPercent((prev) => (prev - 1 < 0 ? prev : prev - 1));
      return;
    }
  };
  return (
    <div className="App">
      <header className="App-header" onKeyDown={handleKeyDown} tabIndex={0}>
        <LinearWithValueLabel percent={percent}/>
      </header>
    </div>
  );
}

export default App;
