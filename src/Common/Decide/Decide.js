import React from 'react';

import * as S from './Decide.styles';

const Decide = ({ children, on }) => {
  return <S.Decide on={on}>{children}</S.Decide>;
};

export default Decide;
