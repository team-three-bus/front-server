import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './Condition.styles';

const Condition = ({ title = '', condition = {}, setCondition }) => {
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
    <S.Container>
      <S.Contents title={title}>
        <Slider {...settings}>
          {condition.map((item) => {
            return (
              <S.Content
                key={item.id}
                on={item.selected}
                onClick={() => {
                  const newCondition = JSON.parse(JSON.stringify(condition));
                  newCondition.forEach((_item) => {
                    if (_item.id == item.id) {
                      _item.selected = true;
                    } else {
                      _item.selected = false;
                    }
                  });
                  setCondition(newCondition);
                }}
              >
                {item.name}
              </S.Content>
            );
          })}
        </Slider>
      </S.Contents>
    </S.Container>
  );
};

export default Condition;
