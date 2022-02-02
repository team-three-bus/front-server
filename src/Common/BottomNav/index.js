import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { BOTTOM_NAV_LIST } from 'Common/Util/Constant';

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
  background: #FFFFFF;
  ${'' /* TODO: 경계선 처리 */}
  border-top: 1px solid green; 
`

const Nav = styled(Link)`
  width: 48px;
  height: 48px;
  min-width: 48px;
  min-height: 48px;
  background: rgba(196, 196, 196, 0.2);
  cursor: pointer;
  
  ${({icon}) => (
    `background: ${`url(${icon}) no-repeat center/20px 20px;`}`
  )}
`

const index = () => {
  return (
    <BottomNav>
      {BOTTOM_NAV_LIST.map((item, i) => (
        <Nav 
          key={i}
          to={item.link}
          icon={item.img} 
        />
      ))}
    </BottomNav>
  );
}

export default index;
