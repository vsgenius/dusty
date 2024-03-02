import React from 'react';
import type { FC } from 'react';

import './Select.css';

type SelectProps = {
  list: string[];
  change: Function;
};

const Select: FC<SelectProps> = ({ list, change }) => {
  const changeHandle = (e: any) => {
    const key: string | boolean = e.target.value;
    change(key);
  };
  return (
    <select className="select" onChange={changeHandle}>
      {list &&
        list.map((elem) => (
          <option key={elem} value={elem}>
            {elem}
          </option>
        ))}
    </select>
  );
};
export { Select };
