import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './SearchHeader.styles';

import { Search } from 'Common/Search';

const SearchHeader = ({
  line,
  searchValue,
  onSearchChange = () => {},
  onKeyDown = () => {},
  onSearch = () => {},
}) => {
  const navigate = useNavigate();
  return (
    <S.SearchHeader line={line}>
      <S.BtnBack
        onClick={() => {
          navigate(-1);
        }}
      />
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
