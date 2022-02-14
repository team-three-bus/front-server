import React from 'react';

import * as S from './Layout.styles';

import { MainHeader, SubHeader, SearchHeader } from 'Common/Header';

const Layout = ({
  children,
  title = '',
  header = 'main',
  line,
  searchValue,
  onSearchChange,
  onSearch,
  onSearchClick,
}) => {
  return (
    <S.Layout>
      {header === 'sub' ? (
        <SubHeader title={title} />
      ) : header === 'search' ? (
        <SearchHeader
          line={line}
          searchValue={searchValue}
          onSearchChange={onSearchChange}
          onSearch={onSearch}
        />
      ) : (
        <MainHeader
          search={true}
          searchValue={searchValue}
          onSearchChange={onSearchChange}
          onSearch={onSearch}
          onSearchClick={onSearchClick}
        />
      )}

      <S.Wrap>{children}</S.Wrap>
    </S.Layout>
  );
};

export default Layout;
