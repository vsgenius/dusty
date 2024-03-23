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
  return (
    <button className={cnButton({ dark, secondary, state })}>Hello</button>
  );
};

export { Button };
