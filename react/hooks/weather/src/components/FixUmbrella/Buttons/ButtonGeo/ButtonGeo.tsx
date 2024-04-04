import React from 'react';
import type { FC } from 'react';
import { cnButtonGeo } from './ButtonGeo.classname';
import locationImg from '../../img/location-arrow-solid.svg';

import './ButtonGeo.css';

type ButtonGeoProps = {
  getCurrentPosition: () => void;
}

const ButtonGeo:FC<ButtonGeoProps> = ({ getCurrentPosition }) => {
  return (
    <button className={cnButtonGeo()} onClick={getCurrentPosition}>
      <img style={{ width: '20px' }} src={locationImg} alt="location" />
    </button>
  )
}

export { ButtonGeo }