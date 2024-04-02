import React from 'react';
import { useClickCount } from './components/hook/useClickCount';
import { cn } from '@bem-react/classname';

import './App.css';

function App() {
  const {value, onClick} = useClickCount();
  const cnButton = cn('Button');

  return (
    <div className="App">
      <header className="App-header">
        <button className={cnButton()} onClick={onClick}>{value}</button>
      </header>
    </div>
  );
}

export default App;
