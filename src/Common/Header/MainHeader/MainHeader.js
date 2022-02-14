import React from 'react';

import * as S from './MainHeader.styles';

import { Search } from 'Common/Search';

const MainHeader = ({
  title,
  search = false,
  searchValue,
  onSearchChange,
  onSearch,
  onSearchClick = () => {},
}) => {
  return (
    <S.MainHeader>
      <S.LogoBtn />
      {search && (
        <Search
          value={searchValue}
          onChange={onSearchChange}
          onKeyDown={onSearch}
          onClick={onSearchClick}
        />
      )}
      <S.LoginBtn />
    </S.MainHeader>
  );
};

export { MainHeader };
