import React, { useState } from 'react';
import { DiscreteSlider } from './components/Slider/Slider';
import Container from '@material-ui/core/Container';

import './App.css';

type rgpType = {
  red: number;
  green: number;
  blue: number;
  opacity: number;
};

function App() {
  const [rgb, setRgb] = useState<rgpType>({
    red: 0,
    green: 0,
    blue: 0,
    opacity: 1,
  });
  return (
    <div className="App">
      <header className="App-header">
        <DiscreteSlider rgb={rgb} setRgb={setRgb} />
        <Container
          maxWidth="sm"
          style={{
            color: `rgb(${rgb.red}, ${rgb.green}, ${rgb.blue})`,
            opacity: rgb.opacity,
          }}
        >
          <h1>Заголовок</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
            doloribus magni voluptatum, atque sint cumque tempore consequatur
            corporis placeat, sed quibusdam. Temporibus a optio in provident
            accusamus est! Cupiditate, sequi!
          </p>
        </Container>
      </header>
    </div>
  );
}

export default App;
