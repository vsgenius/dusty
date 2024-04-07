import React, { useState } from 'react';
import { cnFixUmbrella } from './FixUmbrella.classname';
import { BlockGeo } from './Blocks/BlockGeo/BlockGeo';
import { BlockWeather } from './Blocks/BlockWeather/BlockWeather';

import './FixUmbrella.css';

export type CoordsType = {
  lat: number;
  lon: number;
};

function FixUmbrella() {
  const [coords, setCoords] = useState<CoordsType | undefined>(undefined);

  const changeCoords = (coords: CoordsType) => {
    setCoords(coords);
  }

  return (
    <div className={cnFixUmbrella()}>
      <BlockGeo changeCoords={changeCoords}/>
      {coords && <BlockWeather coords={coords}/>}
    </div>
  );
}

export { FixUmbrella };
