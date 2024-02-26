import React from 'react'
import type {FC} from 'react';

import './Select.css';

type SelectProps = {
    type:string;
    list: object;
    change: Function;
}

const Select:FC<SelectProps> = ({type,list, change}) => {
    const changeHandle = (e:any)=>{
        const key:string = e.target.value;
        change(type, key);
    };
  return (
    <select className='select' onChange={changeHandle}>
        <option selected disabled>Выберите вариант</option>
        {Object.keys(list).map(elem=>
            <option key={elem} value={elem}>{elem}</option>
        )}
    </select>
  )
}
export {Select};