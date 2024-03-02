import React, { useState } from 'react';
import { Button } from './components/Button/Button';
import { Select } from './components/Select/Select';

import './App.css';

function App() {
  const listState = ['normal', 'hover', 'disabled'];
  const listSecondary = ['primary', 'secondary'];
  const listDark = ['light', 'dark'];
  const [state, setState] = useState('normal');
  const [secondary, setSecondary] = useState('primary');
  const [dark, setDark] = useState('light');
  const handleChangeState = (newState: string) => {
    setState(newState);
  };
  const handleChangeSecondary = (newSecondary: string) => {
    setSecondary(newSecondary);
  };
  const handleChangeDark = (newDark: string) => {
    setDark(newDark);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Select list={listState} change={handleChangeState} />
        <Select list={listSecondary} change={handleChangeSecondary} />
        <Select list={listDark} change={handleChangeDark} />
        <Button state={state} secondary={secondary} dark={dark} />
      </header>
    </div>
  );
}

export default App;
