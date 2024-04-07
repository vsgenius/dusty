import React from 'react'
import type { FC } from 'react'
import { cnBlockCity } from './BlockCity.classname';

import './BlockCity.css'

type BlockCityProps = {
    city: string;
    changeDetermination: () => void;
}

const BlockCity:FC<BlockCityProps> = ({ city, changeDetermination }) => {
  return (
    <div className={cnBlockCity()}>
        <p>{ city }</p> 
        <p className={cnBlockCity('MainEdit')} onClick={changeDetermination}>Изменить</p>
    </div>
  )
}

export { BlockCity }
