import React from 'react';

import * as S from './Mark.styles';

import { Mark } from './';

const MarkBox = ({ list: propsList, onClick, onChange = () => {} }) => {
  const [list, setList] = React.useState(propsList || []);

  React.useEffect(() => {
    setList(propsList);
  }, [propsList]);

  return (
    <S.MarkBox>
      {list.map((item) => {
        return (
          <Mark
            key={item.id}
            id={item.id}
            onClick={onClick}
            deleteMark={(id) => {
              const _list = list.filter((item) => item.id != id);
              setList(_list);
              onChange(_list);
            }}
          >
            {item.name}
          </Mark>
        );
      })}
    </S.MarkBox>
  );
};

export { MarkBox };
