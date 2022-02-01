import React from 'react';

import * as S from './Empty.styles';

import Img from './img/icon-empty.svg';

const Empty = ({ text = '최근 검색어가 없습니다' }) => {
  return (
    <S.Empty full={true}>
      <img src={Img} alt={text} />
      <S.Text>{text}</S.Text>
    </S.Empty>
  );
};

export { Empty };
