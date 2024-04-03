import { useEffect, useState } from 'react';
import { CoordsType } from '../FixUmbrella';

type changeCoordsReturnType = {
  valueWeather: number | undefined;
  changeCoords: (value: CoordsType) => void
};

const TO_CELSIUS = 273.15;

const getCelsius = (value: number): number => {
  return Math.round(value - TO_CELSIUS);
}

const useWeather = (): changeCoordsReturnType => {
    const [valueWeather, setWeather] = useState<number | undefined>(undefined);
    const [coords, setCoords] = useState<CoordsType | undefined>(undefined);

    const changeCoords = (value: CoordsType) => {
      setCoords(value)
    }

    useEffect(() => {
      if (!coords) return;
        const getWeather = async () =>{
            const url = new URL('https://api.openweathermap.org/data/2.5/weather');
            url.searchParams.set('lat',String(coords.lat));
            url.searchParams.set('lon',String(coords.lon));
            url.searchParams.set('appid','85ed15b3e81d7e0c16510a6160d80b94');
            const response = await fetch(url);
            const result = await response.json();
            setWeather(getCelsius(result.main.temp));
        }
        if (coords) {
        getWeather()
        }
    },[coords])

  return {valueWeather, changeCoords};
}

export { useWeather }