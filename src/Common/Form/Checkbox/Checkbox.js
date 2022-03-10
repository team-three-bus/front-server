import React from 'react';

import * as S from './Checkbox.styles';

const Checkbox = ({ name, id, label, checked, size, onChange }) => {
  return (
    <S.UICheckbox size={size}>
      <S.Checkbox
        size={size}
        type={`checkbox`}
        name={name}
        id={id}
        checked={checked}
        onChange={(e) => {
          onChange(e.target.checked);
        }}
      />
      <S.Label htmlFor={id} size={size}>
        {label}
      </S.Label>
    </S.UICheckbox>
  );
};

export default Checkbox;
