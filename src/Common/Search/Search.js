import React from 'react';

import * as S from './Search.styles';

const Search = ({
  placeholder = `상품을 검색보세요`,
  value = '',
  sort = 'default',
  type = 'search',
  onChange = () => {},
  onSearch = () => {},
}) => {
  const deleteValue = React.useCallback(() => {
    onChange('');
  }, [value]);
  return (
    <>
      <S.Search sort={sort}>
        <S.Input
          sort={sort}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.keyCode !== 13) return;
            onSearch(e.target.value);
          }}
        />
        {sort === 'basic' && (
          <S.BtnDelete type='button' onClick={deleteValue} />
        )}
      </S.Search>
      {sort === 'basic' && (
        <S.BtnSearch
          type='button'
          onClick={() => {
            onSearch(value);
          }}
        />
      )}
    </>
  );
};

export { Search };
