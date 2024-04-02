import React, { useEffect, useState } from 'react';
import { FC } from 'react';

type WeatherProps = {
    latitude:number;
    longitude:number;
  }

const Weather:FC<WeatherProps> = ({latitude,longitude}) => {
    const [weather, setWeather] = useState();

    useEffect(()=>{
        const getWeather = async () =>{
            const url = new URL('https://api.openweathermap.org/data/2.5/weather');
            url.searchParams.set('lat',String(latitude));
            url.searchParams.set('lon',String(longitude));
            url.searchParams.set('appid','85ed15b3e81d7e0c16510a6160d80b94');
            const response = await fetch('');
            const result = await response.json();
            console.log(result);
            setWeather(result);
        }
        getWeather()
    },[latitude,longitude])

  return (
    <div>{weather}</div>
  )
}

export { Weather }