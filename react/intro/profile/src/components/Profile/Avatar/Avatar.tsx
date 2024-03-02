import React from 'react';
import type { FC } from 'react';
import { cnProfile } from '../Profile.classname';

import './Avatar.css';

type AvatarProps = {
  src: string;
  name: string;
  desc: string;
};

const Avatar: FC<AvatarProps> = ({ src, name, desc }) => {
  console.log(src);
  return (
    <div className={cnProfile('avatar')}>
      <img className={cnProfile('avatar-image')} src={src} alt="avatar" />
      <p className={cnProfile('avatar-name')}>{name}</p>
      <p className={cnProfile('avatar-desc')}>{desc}</p>
    </div>
  );
};

export { Avatar };
