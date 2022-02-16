import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { BOTTOM_NAV_LIST } from './Constant';

import { Layout } from 'Common/Layout/Layout.styles';

const BottomNav = styled.div`
  box-sizing: border-box;
  position: fixed;

  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0 36px;
  background: #ffffff;
  -webkit-box-shadow: 0px 5px 40px -20px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 5px 40px -20px rgba(0, 0, 0, 0.2);

  left: 50%;
  max-width: 768px;
  transform: translateX(-50%);
`;

const Nav = styled(Link)`
  width: 48px;
  height: 48px;
  min-width: 48px;
  min-height: 48px;
  background: rgba(196, 196, 196, 0.2);
  cursor: pointer;

  ${({ icon }) => `background: ${`url(${icon}) no-repeat center/cover;`}`}
`;

const Index = () => {
  const location = useLocation();
  return (
    <BottomNav>
      {BOTTOM_NAV_LIST.map((item, i) => (
        <Nav
          key={i}
          to={item.link}
          icon={location.pathname === item.link ? item.onImg : item.offImg}
        />
      ))}
    </BottomNav>
  );
};

export default Index;
