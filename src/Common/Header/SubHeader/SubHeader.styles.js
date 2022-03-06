import styled from 'styled-components';

import IconBack from './img/icon-back.svg';
import IconSearch from './img/icon-search.svg';
import IconShare from './img/icon-share.svg';

export const SubHeader = styled.div`
  position: relative;
  height: 64px;
  box-sizing: border-box;
  padding-left: 52px;
  padding-right: 52px;
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

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const BtnBack = styled.button`
  position: absolute;
  top: 50%;
  left: 6px;
  transform: translateY(-50%);
  height: 40px;
  width: 40px;
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
export const BtnShare = styled.button`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  box-sizing: border-box;
  border: none;
  background: url(${IconShare}) center center no-repeat;
  text-indent: -9999px;
`;
