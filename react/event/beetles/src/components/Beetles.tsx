import React from 'react';
import { Beetle } from './Beetle/Beetle';
import type { FC } from 'react';

type BeetlesType = {
  arrBeetles: number[][];
  setEndGame: Function;
  getDuration: Function;
};

const Beetles: FC<BeetlesType> = ({ arrBeetles, setEndGame, getDuration }) => {
  const removeElemArray = (index: number) => {
    arrBeetles.splice(index, 1);
    if (arrBeetles.length === 0) {
      setEndGame(true);
      getDuration();
    }
  };
  return (
    <>
      {arrBeetles.map((elem, index) => (
        <Beetle
          key={index}
          left={elem[0]}
          top={elem[1]}
          removeElemArray={removeElemArray}
        />
      ))}
    </>
  );
};

export { Beetles };
