import React from 'react';

import * as S from './MainHeader.styles';

import { Search } from 'Common/Search';

const MainHeader = ({
  title,
  search = false,
  searchValue,
  onSearchChange,
  onSearch,
}) => {
  return (
    <S.MainHeader>
      <S.LogoBtn />
      {search && (
        <Search
          value={searchValue}
          onChange={onSearchChange}
          onKeyDown={onSearch}
        />
      )}
      <S.LoginBtn />
    </S.MainHeader>
  );
};

export { MainHeader };
