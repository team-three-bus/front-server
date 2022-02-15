import React from 'react';

import * as S from './Layout.styles';

import { MainHeader, SubHeader, SearchHeader } from 'Common/Header';
import BottomNav from 'Common/BottomNav';

const Layout = ({
  children,
  title = '',
  header = 'main',
  bottomnav,
  line,
  search,
  share,
  shareLink,
  searchValue,
  onSearchChange,
  onSearch,
  onSearchClick,
}) => {
  return (
    <S.Layout bottomnav={bottomnav}>
      {header === 'sub' ? (
        <SubHeader
          title={title}
          search={search}
          share={share}
          shareLink={shareLink}
        />
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
      {bottomnav && <BottomNav />}
    </S.Layout>
  );
};

export default Layout;
