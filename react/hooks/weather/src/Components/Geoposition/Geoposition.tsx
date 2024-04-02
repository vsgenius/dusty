import React, { useState } from 'react';
import type { SetStateAction, Dispatch, FC } from 'react';
import type { CoordsType } from '../../App';
import { useGeolocation } from '../../hooks/useGeolocation';

type GeopositionProps = {
  city?: string;
  setCoords: Dispatch<SetStateAction<CoordsType | undefined>>;
};

const Geoposition: FC<GeopositionProps> = ({ city = 'auto', setCoords }) => {
  const [currentCity, setCurrentCity] = useState('');
  const position = useGeolocation();
  console.log(`${position?.latitude} ${position?.longitude}`);
  setCurrentCity(`${position?.latitude} ${position?.longitude}`)
//   if (position) {
//     setCoords({ latitude: position.latitude, longitude: position.longitude });
//   }

  // if (city==='auto') {
  //     setCurrentCity(`${position?.latitude} ${position?.longitude}`)
  // }
  return <div>{currentCity && 'Не определена'}</div>;
};

export { Geoposition };
