import React from 'react';

import * as S from './SubHeader.styles';

const SubHeader = ({ title, search }) => {
  return (
    <S.SubHeader>
      <S.BtnBack />
      <S.Title>{title}</S.Title>
      {search && <S.BtnSearch>검색</S.BtnSearch>}
    </S.SubHeader>
  );
};

export default SubHeader;
