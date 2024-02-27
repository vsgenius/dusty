import React from 'react'
import type { FC } from 'react';

import './ListItems.css'

type ItemsProps = {
    items: Record<string, string>;
  };

const ListItems:FC<ItemsProps> = ({items}) => {
    const keys:string[] = Object.keys(items);
  return (
    <ul className='items'>
      {keys && keys.map((item)=>(
        <li className='item'><img className='item-image' src={items[item]} alt="" />{item}</li>
      ))}
    </ul>
  )
}
export {ListItems}
