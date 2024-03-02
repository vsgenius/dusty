import React, { useState } from 'react';
import type { KeyboardEvent } from 'react';
import { Loader } from './components/Loader/Loader';

import './App.css';

function App() {
  const [prosent, setProsent] = useState(0);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      setProsent((prev) => (prev + 4 > 400 ? 400 : prev + 4));
      return;
    }
    if (event.key === 'ArrowLeft') {
      setProsent((prev) => (prev - 4 < 0 ? 0 : prev - 4));
      return;
    }
  };

  return (
    <div className="App">
      <header className="App-header" onKeyDown={handleKeyDown} tabIndex={0}>
        <Loader prosent={prosent} />
      </header>
    </div>
  );
}

export default App;
