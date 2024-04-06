import React, { useEffect, useState } from 'react';
import { cnFixUmbrella } from './FixUmbrella.classname';
import { useGeoposition } from './hooks/useGeoposition';
import { useWeather } from './hooks/useWeather';
import { useGetCity } from './hooks/useGetCity';

import './FixUmbrella.css';
import { BlockCity } from './Blocks/BlockCity/BlockCity';
import { BlockWeather } from './Blocks/BlockWeather/BlockWeather';

export type CoordsType = {
  lat: number;
  lon: number;
};

function FixUmbrella() {
  const [coords, setCoords] = useState<CoordsType | undefined>(undefined);
  const [city, setCity] = useState<string | undefined>(undefined);
  const [editFlag, setEditFlag] = useState(false);
  const [coordsCity, changeCoordsCity] = useGetCity();
  const weather = useWeather();
  const geo = useGeoposition();

  const changeSuggest = (suggestion:any) => {
    if(!suggestion[0].coords || !suggestion[0].name) return;
    setEditFlag(!editFlag);
    setCity(suggestion[0].name);
    setCoords(suggestion[0].coords);
  }

  const getCurrentPosition = () => {
      setCoords(geo);
  }

  const getCity = () => {
    if (!coords) return;
    changeCoordsCity(coords);
    setCity(coordsCity);
  }

  const changeEditFlag = () => {
    setEditFlag(!editFlag);
  }

  useEffect(() => {
    if (!coords) {
      getCurrentPosition();
      return;
    }
    getCity();
    weather.changeCoords(coords);
  }, [weather, editFlag, coords]);


  return (
    <div className={cnFixUmbrella()}>
      <BlockCity 
        editFlag={editFlag} 
        changeEditFlag={changeEditFlag} 
        city={city} 
        getCurrentPosition={getCurrentPosition}
        changeSuggest={changeSuggest}
      />
      <BlockWeather weather={weather}/>
    </div>
  );
}

export { FixUmbrella };
