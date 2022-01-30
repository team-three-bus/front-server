import React from 'react';

import * as S from './Pick.styles';

const Pick = ({ children, on }) => {
  return <S.Pick on={on}>{children}</S.Pick>;
};

export default Pick;
