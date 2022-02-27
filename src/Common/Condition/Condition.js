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
  const $contents = React.useRef();
  const [$content, set$Content] = React.useState([]);

  React.useEffect(() => {
    set$Content(($content) =>
      Array(condition.length)
        .fill()
        .map((_, i) => $content[i] || React.createRef())
    );
  }, []);

  React.useEffect(() => {
    const selectedIndex = condition.findIndex((item) => item.selected);
    const $selected = $content[selectedIndex];
    if (!$selected) return;
    const { x: scrollX } = $selected.current.getBoundingClientRect();

    if ($contents && selectedIndex > -1)
      $contents.current.scrollTo(scrollX - 20, 0);
  }, [$content]);

  return (
    <S.Container>
      <S.Contents title={title} ref={$contents}>
        {condition.map((item, index) => {
          return (
            <S.Content
              key={item.id}
              id={item.id}
              ref={$content[index]}
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
      </S.Contents>
    </S.Container>
  );
};

export default Condition;
