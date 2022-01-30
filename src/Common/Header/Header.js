import React from 'react';

import * as S from './Header.styles';

import { Search } from 'Common/Search';

const Header = ({
  title,
  search = false,
  searchValue,
  onSearchChange,
  onSearch,
}) => {
  return (
    <S.Header>
      <S.LogoBtn />
      {search && (
        <Search
          value={searchValue}
          onChange={onSearchChange}
          onKeyDown={onSearch}
        />
      )}
      <S.LoginBtn />
    </S.Header>
  );
};

export { Header };
