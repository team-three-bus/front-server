import React from 'react';

import * as S from './TextBtn.styles';

const TextBtn = ({ children, type = `button`, onClick = () => {} }) => {
  return (
    <S.TextBtn type={type} onClick={onClick}>
      {children}
    </S.TextBtn>
  );
};

export { TextBtn };
