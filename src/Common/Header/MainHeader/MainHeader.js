import React, { useEffect, useState } from 'react';

import * as S from './MainHeader.styles';

import { Search } from 'Common/Search';

const MainHeader = ({
  search = false,
  searchValue,
  onSearchChange,
  onSearch,
  onSearchClick = () => {},
}) => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLogin(localStorage.getItem('access_token'));
  }, []);

  return (
    <S.MainHeader>
      <S.LogoBtn
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo(0, 0);
          window.location.reload();
        }}
      />
      {search && (
        <Search
          value={searchValue}
          onChange={onSearchChange}
          onKeyDown={onSearch}
          onClick={onSearchClick}
        />
      )}
      <S.LoginBtn to={isLogin ? '/myPage' : '/login'} />
    </S.MainHeader>
  );
};

export { MainHeader };
