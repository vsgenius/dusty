import React from 'react'
import type { FC } from 'react';

import './Avatar.css';

type AvatarProps = {
    src:string;
    name:string;
    desc:string;
}

const Avatar:FC<AvatarProps> = ({src, name, desc}) =>{
    console.log(src)
  return (
    <div className='avatar'>
        <img className='avatar-image' src={src} alt="avatar" />
        <p className='avatar-name'>{name}</p>
        <p className='avatar-desc'>{desc}</p>
    </div>

  )
}

export {Avatar}