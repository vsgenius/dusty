import React, { useState } from 'react';

import './App.css';
import { Geoposition } from './Components/Geoposition/Geoposition';
import { Weather } from './Components/Weather/Weather';

export type CoordsType = {
  latitude:number;
  longitude:number;
}

function App() {
  const [coords, setCoords] = useState<CoordsType | undefined>(undefined);

  return (
    <div className="App">
      <header className="App-header">
        <Geoposition setCoords={setCoords}/>
        {coords ? <Weather latitude={coords.latitude} longitude={coords.longitude}/>  : 'Определение координат'}
      </header>
    </div>
  );
}

export default App;
