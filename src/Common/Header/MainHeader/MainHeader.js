import React, { useEffect, useState } from 'react';

import * as S from './MainHeader.styles';

import { Search } from 'Common/Search';

const MainHeader = ({
  title,
  search = false,
  searchValue,
  onSearchChange,
  onSearch,
}) => {
  const [isLogin, setIsLogin] = useState(false);
  
  useEffect(() => {
    setIsLogin(localStorage.getItem("access_token"));
  }, [])
  
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
      <S.LoginBtn to={isLogin ? "/myPage" : "/login"} />
    </S.MainHeader>
  );
};

export { MainHeader };
