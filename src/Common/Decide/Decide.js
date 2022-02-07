import React from 'react';

import * as S from './Decide.styles';

const Decide = ({ children, on, onClick }) => {
  return (
    <S.Decide on={on} onClick={onClick}>
      {children}
    </S.Decide>
  );
};

export default Decide;
