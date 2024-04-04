import React from 'react';
import { cnBlockWeather } from './BlockWeather.classname';
import type { FC } from 'react';

import './BlockWeather.css';
import { changeCoordsReturnType } from '../../hooks/useWeather';

type BlockWeatherProps = {
  weather: changeCoordsReturnType;
}

const BlockWeather:FC<BlockWeatherProps> = ({ weather }) => {
  return (
    <div className={cnBlockWeather()}>
    <p>Температура</p>
    <p>{weather.valueWeather ? weather.valueWeather : '-'}</p>
  </div>
  )
}

export { BlockWeather }