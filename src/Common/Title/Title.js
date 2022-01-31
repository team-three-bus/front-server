import React from 'react';

import * as S from './Title.styles';

const Title = ({ title, right, sort }) => {
  return (
    <S.Wrap>
      <S.Title sort={sort}>{title}</S.Title>
      {right && <S.Right>{right}</S.Right>}
    </S.Wrap>
  );
};

export { Title };
