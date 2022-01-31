import React from 'react';

import * as S from './Layout.styles';

import { Header } from 'Common/Header';
import { SubHeader } from 'Common/SubHeader';

const Layout = ({
  children,
  header = 'main',
  searchValue,
  onSearchChange,
  onSearch,
}) => {
  return (
    <>
      <S.Layout>
        {header === 'sub' ? (
          <SubHeader title='제목' />
        ) : (
          <Header
            search={true}
            searchValue={searchValue}
            onSearchChange={onSearchChange}
            onSearch={onSearch}
          />
        )}

        <S.Wrap>{children}</S.Wrap>
      </S.Layout>
    </>
  );
};

export default Layout;
