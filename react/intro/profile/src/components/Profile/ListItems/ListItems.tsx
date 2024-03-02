import React from 'react';
import type { FC } from 'react';

import { cnProfile } from '../Profile.classname';

import './ListItems.css';

type ItemsProps = {
  items: Record<string, string>;
};

const ListItems: FC<ItemsProps> = ({ items }) => {
  const keys: string[] = Object.keys(items);
  return (
    <ul className={cnProfile('items')}>
      {keys &&
        keys.map((item) => (
          <li className={cnProfile('item')}>
            <img className={cnProfile('item-image')} src={items[item]} alt="" />
            {item}
          </li>
        ))}
    </ul>
  );
};
export { ListItems };
