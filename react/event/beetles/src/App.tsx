import React, { useState } from 'react';
import { Beetles } from './components/Beetles';
import type { MouseEvent } from 'react';

import './App.css';

function App() {
  const [arrBeetles, setArrBeetkes] = useState<number[][]>([]);
  const [endGame, setEndGame] = useState(true);
  const [start, setStart] = useState(0);
  const [duration, setDuration] = useState('');

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setEndGame(false);
    setStart(Date.now());
    for (let i = 0; i < 10; i++) {
      const width = Math.round(Math.random() * window.innerWidth - 20);
      const height = Math.round(Math.random() * window.innerHeight - 20);
      setArrBeetkes((prev) => {
        return [...prev, [width, height]];
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
  const getDuration = () => {
    if (!duration) {
      const time = Date.now() - start;
      setDuration(msToTime(time));
      setTimeout(() => {
        setDuration('');
      }, 5000);
    }
  };
  return (
    <div className="App">
      {endGame && (
        <button className="button" onClick={handleClick}>
          {' '}
          новая игра
        </button>
      )}
      {duration ? <p>Длительность {duration}</p> : ''}
      <Beetles
        arrBeetles={arrBeetles}
        setEndGame={setEndGame}
        getDuration={getDuration}
      />
    </div>
  );
}

export default App;
