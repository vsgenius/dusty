import React, { useEffect, useState } from 'react';
import { cnBlockWeather } from './BlockWeather.classname';
import { useWeather } from '../../hooks/useWeather';
import type { FC } from 'react';
import type { CoordsType } from '../../FixUmbrella';
import BeatLoader from "react-spinners/BeatLoader";

import './BlockWeather.css';


type BlockWeatherProps = {
  coords: CoordsType;
}

const BlockWeather:FC<BlockWeatherProps> = ({ coords }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const weather = useWeather();

  useEffect(()=>{
    setLoading(true);
    weather.changeCoords(coords);
    if (weather.valueWeather) {
      setLoading(false);
    }
  },[coords, weather])

  return (
    <div className={cnBlockWeather()}>
    <p>Температура</p>
    <BeatLoader
        color={"#ffffff"}
        loading={loading}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    {!loading && <p>{weather.valueWeather}</p>}
  </div>
  )
}

export { BlockWeather }