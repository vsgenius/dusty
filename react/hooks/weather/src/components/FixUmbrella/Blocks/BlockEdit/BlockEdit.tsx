import React from 'react';
import type { FC } from 'react';
import { ButtonSaveCity } from '../../Buttons/ButtonSaveCity/ButtonSaveCity';
import { Suggest } from '../../Suggest/Suggest';
import { cnBlockEdit } from './BlockEdit.classname';

import './BlockEdit.css';

type BlockEditProps  = {
  city: string | undefined;
  changeSuggest: (suggestion: any) => void;
  saveSuggestCity: () => void;
}


const BlockEdit:FC<BlockEditProps> = ({ city,  changeSuggest, saveSuggestCity }) => {
  return (
    <div className={cnBlockEdit()}>
      <Suggest city={city ? city : ''} changeSuggest={changeSuggest}/>
    </div>
  )
}

export { BlockEdit }