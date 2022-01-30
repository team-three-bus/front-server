import React from 'react';

import * as S from './Layout.styles';

import { Header } from 'Common/Header';

const Layout = ({ children, searchValue, onSearchChange, onSearch }) => {
  return (
    <>
      <S.Layout>
        <Header
          search={true}
          searchValue={searchValue}
          onSearchChange={onSearchChange}
          onSearch={onSearch}
        />
        <S.Wrap>{children}</S.Wrap>
      </S.Layout>
    </>
  );
};

export default Layout;
