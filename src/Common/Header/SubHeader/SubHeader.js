import React from 'react';

import * as S from './SubHeader.styles';

const SubHeader = ({ title, search, share, shareLink }) => {
  return (
    <S.SubHeader>
      <S.BtnBack />
      <S.Title>{title}</S.Title>
      {search && <S.BtnSearch>검색</S.BtnSearch>}
      {share && <S.BtnShare onClick={shareLink}>검색</S.BtnShare>}
    </S.SubHeader>
  );
};

export default SubHeader;
