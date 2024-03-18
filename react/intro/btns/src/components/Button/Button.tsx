import React from 'react';
import type { FC } from 'react';
import { cnButton } from './Button.classname';

import './Button.css';

type ButtonProps = {
  state: string;
  secondary: string;
  dark: string;
};

const Button: FC<ButtonProps> = ({ state, secondary, dark }) => {
  const classBtn = [
    dark === 'dark' ? 'dark' : 'light',
    secondary === 'secondary' ? 'secondary' : 'primary',
    state,
  ];
  return (
    <button className={cnButton('Main', classBtn.join('_'))}>Hello</button>
  );
};

export { Button };
