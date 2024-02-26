import React, { useState } from 'react';
import {Button} from './components/Button/Button';
import {Select} from './components/Select/Select';
import type {FC} from 'react';

import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Button state={'normal' }secondary={false} dark={false}/>
      <Button state={'normal' }secondary={true} dark={false}/>
      <Button state={'hover' }secondary={false} dark={false}/>
      <Button state={'hover' }secondary={true} dark={false}/>
      <Button state={'disabled' }secondary={false} dark={false}/>
      <Button state={'disabled' }secondary={true} dark={false}/>
      <Button state={'normal' }secondary={false} dark={true}/>
      <Button state={'normal' }secondary={true} dark={true}/>
      <Button state={'hover' }secondary={false} dark={true}/>
      <Button state={'hover' }secondary={true} dark={true}/>
      <Button state={'disabled' }secondary={false} dark={true}/>
      <Button state={'disabled' }secondary={true} dark={true}/>
      </header>
    </div>
  );
}

export default App;
