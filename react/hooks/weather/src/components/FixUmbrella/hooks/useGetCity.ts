import React, { useEffect, useState } from 'react';
import type { CoordsType } from '../FixUmbrella';


const useGetCity = (): [city: string | undefined, changeCoordsCity: (value: CoordsType)=> void] => {
  const [city, setCity] = useState<string | undefined>(undefined);
  const [coords, setCoords] = useState<CoordsType | undefined>(undefined);

  const changeCoordsCity = (value: CoordsType) => {
    setCoords(value);
  }

  useEffect(() => {
    if (!coords) return;
    fetch(
      `https://catalog.api.2gis.com/3.0/items/geocode?lat=${coords.lat}&lon=${coords.lon}6&fields=items.point&key=key`
    )
      .then((response) => response.json())
      .then((res) => {
        const data = res.result.items;
        setCity(data.filter((item:any) => item.subtype === 'city')[0].name);
      })
      .catch(()=>{
        setCity('Город не определен ошибка Api');
      });
 
  }, [coords]);

  return [city, changeCoordsCity];   
}

export { useGetCity }
