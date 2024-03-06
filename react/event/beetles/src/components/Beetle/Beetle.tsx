import React from 'react';
import beetleImg from '../../img/pngwing.com.png';
import { cnBeetle } from './Beetle.classname';
import type { FC } from 'react';

import './Beetle.css';

type BeetleProps = {
  key: number;
  top: string | number;
  left: string | number;
  removeElemArray: Function;
};

const Beetle: FC<BeetleProps> = ({ key, top, left, removeElemArray }) => {
  const handleClick = (event: any) => {
    event.target.remove();
    removeElemArray(key);
  };
  return (
    <div>
      <img
        className={cnBeetle('Img')}
        src={beetleImg}
        style={{ top: top, left: left }}
        onClick={handleClick}
        alt=""
      />
    </div>
  );
};

export { Beetle };
