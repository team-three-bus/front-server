import React from 'react';

import * as S from './Radio.styles';

const Radio = ({ name, id, label, checked, onChange }) => {
  return (
    <S.UIRadio>
      <S.Radio
        type={`radio`}
        name={name}
        id={id}
        checked={checked}
        onChange={(e) => {
          onChange(e.target.checked);
        }}
      />
      <S.Label htmlFor={id}>{label}</S.Label>
    </S.UIRadio>
  );
};

export default Radio;
