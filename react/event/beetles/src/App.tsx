import React, { useState } from 'react';
import { Beetles } from './components/Beetle/Beetles';
import type { MouseEvent } from 'react';

import './App.css';

export type Beetle = {
  top: number;
  left: number;
};

function App() {
  const [arrBeetles, setArrBeetles] = useState<Beetle[]>([]);
  const [startGame, setStartGame] = useState(false);

  const getBeetles = () => {
    setStartGame(true);
    for (let i = 0; i < 10; i++) {
      const left = Math.round(Math.random() * window.innerWidth - 20);
      const top = Math.round(Math.random() * window.innerHeight - 20);
      setArrBeetles((prev) => {
        return [...prev, { top, left }];
      });
    }
  };

  function msToTime(duration: number) {
    let milliseconds: number | string = Math.floor((duration % 1000) / 100);
    let seconds: number | string = Math.floor((duration / 1000) % 60);
    let minutes: number | string = Math.floor((duration / (1000 * 60)) % 60);
    let hours: number | string = Math.floor((duration / (1000 * 60 * 60)) % 24);
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return hours + ':' + minutes + ':' + seconds + '.' + milliseconds;
  }

  return (
    <div className="App">
      {!startGame && (
        <button className="button" onClick={getBeetles}>
          {' '}
          новая игра
        </button>
      )}
      <Beetles
        arrBeetles={arrBeetles}
        setArrBeetles={setArrBeetles}
        setStartGame={setStartGame}
      />
    </div>
  );
}

export default App;
