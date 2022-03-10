import React from 'react';

import * as S from './Input.styles';

const Input = ({
  type = `text`,
  name,
  id,
  value,
  maxLength,
  placeholder,
  onChange,
}) => {
  const deleteValue = React.useCallback(() => {
    onChange('');
  }, [value]);

  return (
    <S.UIInput>
      <S.Input
        type={type}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        {...(maxLength && { maxLength })}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      <S.BtnDelete type='button' onClick={deleteValue} />
    </S.UIInput>
  );
};

export default Input;
