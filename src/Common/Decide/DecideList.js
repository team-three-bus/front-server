import React from 'react';

import * as S from './Decide.styles';

const DecideList = ({ children, line }) => {
  return <S.DecideList line={line}>{children}</S.DecideList>;
};

export default DecideList;
