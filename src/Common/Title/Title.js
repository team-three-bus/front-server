import React from 'react';

import * as S from './Title.styles';

const Title = ({ title, subTitle, icon, right, sort }) => {
  return (
    <S.Wrap sort={sort}>
      <S.TitleBox>
        <S.Title sort={sort}>
          {title} {icon && <S.Icon icon={icon} />}
        </S.Title>
        {subTitle && <S.SubTitle sort={sort}>{subTitle}</S.SubTitle>}
      </S.TitleBox>
      {right && <S.Right>{right}</S.Right>}
    </S.Wrap>
  );
};

export { Title };
