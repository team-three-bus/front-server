import React, { useEffect, useState } from 'react';
import { throttle } from 'lodash';
import { MainHeader, SubHeader, SearchHeader } from 'Common/Header';
import BottomNav from 'Common/BottomNav';
import Footer from 'Common/Footer';
import * as S from './Layout.styles';

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
  hiddenFooter,
  onSearchChange,
  onSearch,
  onSearchClick,
}) => {
  let prevScrollY = 0;
  const [isFixedHeader, setIsFixedHeader] = useState(false);
  const [isFixedBottom, setIsFixedBottom] = useState(true);

  const scrollEvent = () => {
    if (prevScrollY < 64) {
      prevScrollY = window.scrollY;
      return setIsFixedHeader(false);
    }
    if (prevScrollY > window.scrollY) {
      setIsFixedHeader(true);
      setIsFixedBottom(true);
    }
    if (prevScrollY < window.scrollY) {
      setIsFixedHeader(false);
      setIsFixedBottom(false);
    }
    prevScrollY = window.scrollY;
  };

  const goTo = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', throttle(scrollEvent, 100));
    return () => {
      window.removeEventListener('scroll', scrollEvent);
    };
  }, []);

  return (
    <S.Layout bottomnav={bottomnav} isFixed={isFixedHeader}> 
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

      {children && <S.Wrap hiddenFooter={hiddenFooter}>{children}</S.Wrap>}
      {!hiddenFooter && <Footer />}
      {bottomnav && <BottomNav isFixed={isFixedBottom} goTo={goTo} />}
    </S.Layout>
  );
};

export default Layout;
