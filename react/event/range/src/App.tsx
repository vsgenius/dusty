import React, { useState } from 'react';
import { DiscreteSlider } from './components/Slider/Slider';
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import './App.css';

type rgpType = {
  red: number;
  green: number;
  blue: number;
  opacity: number;
};

function App() {
  const [rgbFont, setRgbFont] = useState<rgpType>({
    red: 0,
    green: 0,
    blue: 0,
    opacity: 1,
  });
  const [rgbBack, setRgbBack] = useState<rgpType>({
    red: 255,
    green: 255,
    blue: 255,
    opacity: 1,
  });
  const [currentRadio, setCurrentRadio] = useState<'text' | 'back'>('text');
  const handleChange = () => {
    setCurrentRadio(currentRadio === 'text' ? 'back' : 'text');
  };
  return (
    <div className="App">
      <header className="App-header">
        <FormControl>
          <FormLabel id="demo-customized-radios">Цвет</FormLabel>
          <RadioGroup
            defaultValue={currentRadio}
            aria-labelledby="demo-customized-radios"
            name="customized-radios"
            onChange={handleChange}
          >
            <FormControlLabel value="text" control={<Radio />} label="Текст" />
            <FormControlLabel value="back" control={<Radio />} label="Фон" />
          </RadioGroup>
        </FormControl>
        <DiscreteSlider
          rgb={currentRadio === 'text' ? rgbFont : rgbBack}
          setRgb={currentRadio === 'text' ? setRgbFont : setRgbBack}
        />
        <Container
          maxWidth="sm"
          style={{
            color: `rgb(${rgbFont.red}, ${rgbFont.green}, ${rgbFont.blue}, ${rgbFont.opacity})`,
            backgroundColor: `rgb(${rgbBack.red}, ${rgbBack.green}, ${rgbBack.blue},${rgbBack.opacity})`,
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
