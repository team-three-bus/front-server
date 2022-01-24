import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './Condition.styles';

const Container = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

export const Box = ({ children }) => {
  return <S.Box>{children}</S.Box>;
};

export const Title = ({ children }) => {
  return <S.Title>{children}</S.Title>;
};

export const Contents = ({ children }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: true,
  };

  return (
    <S.Contents>
      <div>
        <Slider {...settings}>{children}</Slider>
      </div>
    </S.Contents>
  );
};

export const Content = ({ children, on }) => {
  return <S.Content on={on}>{children}</S.Content>;
};

export default Container;
