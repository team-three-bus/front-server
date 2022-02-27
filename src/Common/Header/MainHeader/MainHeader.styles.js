import styled from 'styled-components';
import { Link } from 'react-router-dom';

import LogoImg from './img/logo.svg';
import LoginImg from './img/icon-login.png';

import { Search } from 'Common/Search/Search.styles';

export const MainHeader = styled.header`
  display: flex;
  height: 64px;
  padding: 8px 20px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;

  & ${Search} {
    flex: 1;
  }
`;

export const LogoBtn = styled.a`
  display: inline-block;
  width: 60px;
  height: 40px;
  margin-right: 8px;
  background: url(${LogoImg}) center center no-repeat;
  background-size: 100%;
`;

export const LoginBtn = styled(Link)`
  display: inline-block;
  width: 48px;
  height: 48px;
  margin-left: 8px;
  border: none;
  background: url(${LoginImg}) center center no-repeat;
  background-size: 100%;
`;
