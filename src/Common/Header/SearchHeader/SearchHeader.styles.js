import styled from 'styled-components';

import IconBack from './img/icon-back.svg';

import { Search } from 'Common/Search';

export const SearchHeader = styled.header`
  position: relative;
  display: flex;
  height: 64px;
  box-sizing: border-box;
  padding-left: 68px;
  padding-right: 13px;
  background: #fff;
  justify-content: space-between;
  align-items: center;
  ${Search} > {
    flex: 1;
  }
  ${({ line }) => {
    switch (line) {
      case true:
        return `
          height: 74px;
          border-bottom: 10px solid #f8f8f8
        `;
    }
  }}
`;

export const BtnBack = styled.button`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  height: 48px;
  width: 48px;
  border: none;
  vertical-align: middle;
  background: url(${IconBack}) center center no-repeat;
`;
