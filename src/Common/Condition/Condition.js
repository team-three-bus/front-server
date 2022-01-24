import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './Condition.styles';

export const Container = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

const Box = ({ title = '', condition = {}, setCondition }) => {
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
    <S.Box>
      <S.Title>{title}</S.Title>
      <S.Contents>
        <Slider {...settings}>
          {Object.entries(condition).map(([key, value]) => {
            return (
              <S.Content
                key={key}
                on={value.selected}
                onClick={() => {
                  setCondition({
                    ...condition,
                    [key]: {
                      ...condition[key],
                      selected: !value.selected,
                    },
                  });
                }}
              >
                {value.name}
              </S.Content>
            );
          })}
        </Slider>
      </S.Contents>
    </S.Box>
  );
};

export default Box;
