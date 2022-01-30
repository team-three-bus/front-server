import React from 'react';

import * as S from './Checkbox.styles';

const Checkbox = ({ name, id, label, checked, onChange }) => {
  return (
    <S.UICheckbox>
      <S.Checkbox
        type={`checkbox`}
        name={name}
        id={id}
        checked={checked}
        onChange={(e) => {
          onChange(e.target.checked);
        }}
      />
      <S.Label htmlFor={id}>{label}</S.Label>
    </S.UICheckbox>
  );
};

export default Checkbox;
