import React from 'react';

import * as S from './Search.styles';

const Search = ({
  placeholder = `상품을 검색보세요`,
  value = '',
  type = 'search',
  onChange = () => {},
  onKeyDown = () => {},
}) => {
  return (
    <S.Search>
      <S.Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.keyCode !== 13) return;
          onKeyDown(e.target.value);
        }}
      />
    </S.Search>
  );
};

export { Search };
