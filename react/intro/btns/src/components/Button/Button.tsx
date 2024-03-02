import React from 'react';
import type { FC } from 'react';
import { cn } from '@bem-react/classname';

import './Button.css';

type ButtonProps = {
  state: string;
  secondary: string;
  dark: string;
};

const btn = cn('btn');

const Button: FC<ButtonProps> = ({ state, secondary, dark }) => {
  let clName = btn(
    'main',
    `${dark === 'dark' ? 'dark' : 'light'}_${
      secondary === 'secondary' ? 'secondary' : 'primary'
    }_${state}`
  );
  return <button className={clName}>Hello</button>;
};

export { Button };
