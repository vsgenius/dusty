import React from 'react';
import type { FC } from 'react';

import './Button.css';

type ButtonProps = {
  state: string;
  secondary: string;
  dark: string;
};

const Button: FC<ButtonProps> = ({ state, secondary, dark }) => {
  const clName = `btn ${dark === 'dark' ? 'dark' : 'light'}_${
    secondary === 'secondary' ? 'secondary' : 'primary'
  }_${state}`;
  return <button className={clName}>Hello</button>;
};

export { Button };
