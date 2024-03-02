import React from 'react';
import { cnLoader } from './Loader.classname';

import { FC } from 'react';

import './Loader.css';

type LoaderProps = {
  prosent: number;
};

const Loader: FC<LoaderProps> = ({ prosent }) => {
  return (
    <div className={cnLoader()}>
      <p className={cnLoader('prosent')}>{prosent / 4 + '%'}</p>
      <div className={cnLoader('green-line')} style={{ width: prosent }}></div>
    </div>
  );
};

export { Loader };
