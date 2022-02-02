import React from 'react';

import * as S from './SearchHeader.styles';

import { Search } from 'Common/Search';

const SearchHeader = ({
  line,
  searchValue,
  onSearchChange = () => {},
  onKeyDown = () => {},
  onSearch = () => {},
}) => {
  return (
    <S.SearchHeader line={line}>
      <S.BtnBack />
      <Search
        sort='basic'
        value={searchValue}
        onChange={onSearchChange}
        onKeyDown={onKeyDown}
        onSearch={onSearch}
      />
    </S.SearchHeader>
  );
};

export default SearchHeader;
