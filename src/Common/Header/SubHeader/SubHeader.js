import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './SubHeader.styles';

const SubHeader = ({ title, search, share, shareLink }) => {
  const navigate = useNavigate();
  return (
    <S.SubHeader>
      <S.BtnBack onClick={() => navigate(-1)} />
      <S.Title>{title}</S.Title>
      {search && <S.BtnSearch>검색</S.BtnSearch>}
      {share && <S.BtnShare id="kakao-link-btn" onClick={shareLink}>검색</S.BtnShare>}
    </S.SubHeader>
  );
};

export default SubHeader;
