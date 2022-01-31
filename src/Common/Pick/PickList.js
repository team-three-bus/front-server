import React from 'react';

import * as S from './Pick.styles';

const PickList = ({ title, children }) => {
  return (
    <S.PickList>
      <S.Title>{title}</S.Title>
      <S.List>{children}</S.List>
    </S.PickList>
  );
};

export default PickList;
