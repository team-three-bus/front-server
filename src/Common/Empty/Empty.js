import React from 'react';

import * as S from './Empty.styles';

import Img from './img/icon-empty.png';
import ImgQuestion from './img/icon-empty-question.png';

const Empty = ({ text = '최근 검색어가 없습니다', iconType }) => {
  return (
    <S.Empty full={true}>
      <img src={iconType == 'question' ? ImgQuestion : Img} alt={text} />
      <S.Text>{text}</S.Text>
    </S.Empty>
  );
};

export { Empty };
