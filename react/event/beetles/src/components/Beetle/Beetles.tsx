import React from 'react';
import type { Dispatch, FC, SetStateAction } from 'react';
import type { Beetle } from '../../App';

import beetleImg from '../../img/pngwing.com.png';
import { cnBeetles } from './Beetles.classname';

import './Beetles.css';

type BeetlesType = {
  arrBeetles: Beetle[];
  setArrBeetles: Dispatch<SetStateAction<Beetle[]>>;
  setStartGame: Dispatch<SetStateAction<boolean>>;
};

const Beetles: FC<BeetlesType> = ({
  arrBeetles,
  setArrBeetles,
  setStartGame,
}) => {
  const handleClick = (key: number) => {
    return () => {
      setArrBeetles((prev) => prev.filter((elem: any, index) => index !== key));
      if (arrBeetles.length === 1) {
        setStartGame(false);
      }
    };
  };

  return (
    <div className={cnBeetles()}>
      {arrBeetles.map((elem, index) => (
        <div className={cnBeetles('Item')} key={index} onClick={handleClick(index)}>
          <img
            className={cnBeetles('Item-img')}
            src={beetleImg}
            style={{ top: elem.top, left: elem.left }}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export { Beetles };
