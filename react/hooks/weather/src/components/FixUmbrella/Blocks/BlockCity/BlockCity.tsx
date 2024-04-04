import React from 'react'
import type { FC } from 'react'
import { cnBlockCity } from './BlockCity.classname'
import { ButtonGeo } from '../../Buttons/ButtonGeo/ButtonGeo';
import { BlockEdit } from '../BlockEdit/BlockEdit';

import './BlockCity.css';

type BlockCityProps = {
  editFlag:boolean;
  changeEditFlag: ()=> void;
  city: string | undefined;
  getCurrentPosition: ()=> void;
  changeSuggest: (suggestion:any) => void;
}

const BlockCity:FC<BlockCityProps> = ({editFlag, changeEditFlag, city, getCurrentPosition, changeSuggest}) => {
  return (
    <div className={cnBlockCity()}>
      <ButtonGeo getCurrentPosition={getCurrentPosition}/>
      {!editFlag ? <p onClick={changeEditFlag}>{city ? city : 'Выберите город'}</p> : 
      <BlockEdit city={city}  changeSuggest={changeSuggest} saveSuggestCity={changeEditFlag} />}
  </div>
  )
}

export { BlockCity }