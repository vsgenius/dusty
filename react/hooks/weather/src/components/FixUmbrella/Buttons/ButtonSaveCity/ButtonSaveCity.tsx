import React from 'react'
import type { FC } from 'react';
import { cnButtonSaveCity } from './ButtonSaveCity.classname'
import checkImg from '../../img/check-solid.svg';

import './ButtonSaveCity.css'

type saveSuggestCityProps = {
  saveSuggestCity: () => void
}

const ButtonSaveCity:FC<saveSuggestCityProps> = ({ saveSuggestCity }) => {
  return (
    <button className={cnButtonSaveCity()} onClick={saveSuggestCity}>
    <img style={{ width: '20px' }} src={checkImg} alt="location" />
  </button>
  )
}

export { ButtonSaveCity } 