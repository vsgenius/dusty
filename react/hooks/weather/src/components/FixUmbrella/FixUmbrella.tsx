import React, { useEffect, useState } from 'react';
import locationImg from './img/location-arrow-solid.svg';
import checkImg from './img/check-solid.svg';
import { cnFixUmbrella } from './FixUmbrella.classname';
import { useGeoposition } from './hooks/useGeoposition';
import { useWeather } from './hooks/useWeather';
import { Suggest } from './Suggest/Suggest';
import { useGetCity } from './hooks/useGetCity';

import './FixUmbrella.css';

export type CoordsType = {
  lat: number;
  lon: number;
};

function FixUmbrella() {
  const [coords, setCoords] = useState<CoordsType | undefined>(undefined);
  const [city, setCity] = useState<string | undefined>(undefined);
  const [editFlag, setEditFlag] = useState(false);
  const [coordsCity, changeCoordsCity] = useGetCity();
  const geo = useGeoposition();
  const weather = useWeather();

  useEffect(() => {
    if (!coords) return;
    weather.changeCoords(coords);
  }, [coords,weather]);

  const changeSuggest = (suggestion:any) => {
    if(!suggestion[0].coords || !suggestion[0].name) return;
    setCity(suggestion[0].name);
    setCoords(suggestion[0].coords);
  }

  const getCurrentPosition = () => {
    if (!geo) return;
    setEditFlag(false);
    setCoords(geo);
    changeCoordsCity(geo);
    setCity(coordsCity);
  }

  const changeEditFlag = () => {
    setEditFlag(true);
  }

  const saveSuggestCity = () => {
    setEditFlag(false);
  }

  return (
    <div className={cnFixUmbrella()}>
      <div className={cnFixUmbrella('City')}>
        <button className={cnFixUmbrella('CityButton')} onClick={getCurrentPosition}>
          <img style={{ width: '20px' }} src={locationImg} alt="location" />
        </button>
        {!editFlag ? <p onClick={changeEditFlag}>{city ? city : 'Выберите город'}</p> : 
        <div className={cnFixUmbrella('BlockEdit')}>
          <Suggest city={city ? city : ''} changeSuggest={changeSuggest}/>
          <button className={cnFixUmbrella('CityButton')} onClick={saveSuggestCity}>
            <img style={{ width: '20px' }} src={checkImg} alt="location" />
          </button>
        </div>}
      </div>
      <div className={cnFixUmbrella('Weather')}>
        <p>Температура</p>
        <p>{weather.valueWeather ? weather.valueWeather : '-'}</p>
      </div>
    </div>
  );
}

export { FixUmbrella };
