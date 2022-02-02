import React from 'react';

import * as S from './Pick.styles';

const Pick = ({ children, on, onClick }) => {
  return (
    <S.Pick on={on} onClick={onClick}>
      {children}
    </S.Pick>
  );
};

export default Pick;
