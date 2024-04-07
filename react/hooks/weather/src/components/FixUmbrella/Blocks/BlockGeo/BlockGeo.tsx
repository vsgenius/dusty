import React, { useEffect, useState } from 'react'
import type { FC } from 'react'
import { cnBlockGeo } from './BlockGeo.classname'
import { ButtonGeo } from '../../Buttons/ButtonGeo/ButtonGeo';
import { BlockEdit } from '../BlockEdit/BlockEdit';
import { CoordsType } from '../../FixUmbrella';
import { useGeoposition } from '../../hooks/useGeoposition';
import { useGetCity } from '../../hooks/useGetCity';
import { BlockCity } from '../BlockCity/BlockCity'

import './BlockGeo.css';

type BlockGeoProps = {
  changeCoords: (coords: CoordsType) => void
}

const BlockGeo: FC<BlockGeoProps> = ({ changeCoords }) => {
  const [autoDetermination, setDetermination] = useState<boolean>(true);
  const [city, setCity] = useState<string | undefined>(undefined);
  const [coordsCity, changeCoordsCity] = useGetCity();
  const [editVisible, setVisible] = useState(false);
  const geo = useGeoposition();

  const getCurrentPosition = () => {
    setDetermination(!autoDetermination);
      if (geo){
        changeCoords(geo);
      }
  }

  const changeDetermination = () => {
    setDetermination(!autoDetermination);
    setVisible(!editVisible);
  }

  const changeSuggest = (suggestion: any) => {
    if(!suggestion[0].coords || !suggestion[0].name) return;
    setCity(suggestion[0].name);
    changeCoords(suggestion[0].coords);
    changeVisible();
  }

  const getCity = () => {
    if (!geo) return;

    changeCoordsCity(geo);
    setCity(coordsCity);
  }

  const changeVisible = () => {
    setVisible(!editVisible);
  }

  useEffect(() =>{
    if (autoDetermination) {
      getCurrentPosition();
      getCity();
    }
  },[autoDetermination, getCurrentPosition, getCity])

  return (
    <div className={cnBlockGeo()}>
      {!editVisible ? 
        city && <div className={cnBlockGeo('Main')}>
          <ButtonGeo getCurrentPosition={getCurrentPosition}/>
          <BlockCity city={city} changeDetermination={changeDetermination}/>
        </div> 
      : <BlockEdit city={city}  changeSuggest={changeSuggest} saveSuggestCity={changeVisible} />}
  </div>
  )
}

export { BlockGeo }