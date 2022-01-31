import styled from 'styled-components';

import IconBack from './img/icon-back.svg';
import IconSearch from './img/icon-search.svg';

export const SubHeader = styled.div`
  position: relative;
  height: 64px;
  box-sizing: border-box;
  padding-left: 68px;
  padding-right: 68px;
  background: #fff;
`;
export const Title = styled.h1`
  text-align: center;
  font-family: NanumSquareRound;
  font-size: 16px;

  font-weight: 700;
  line-height: 64px;
  margin: 0;
  color: #000000;
  text-align: center;
`;
export const BtnBack = styled.button`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  height: 68px;
  width: 68px;
  border: none;
  background: url(${IconBack}) center center no-repeat;
`;
export const BtnSearch = styled.button`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  height: 32px;
  padding-left: 27px;
  padding-right: 11px;
  background: #f5f6f8 url(${IconSearch}) 10px center no-repeat;
  border-radius: 16px;
  border: 1px solid #f5f6f8;
  box-sizing: border-box;
  color: #000000;
  font-family: NanumSquareRound;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
`;
