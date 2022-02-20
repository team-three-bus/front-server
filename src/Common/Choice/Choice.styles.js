import styled from 'styled-components';

import IconArrowBottom from './img/icon-arrow-bottom.svg';
import IconDelete from './img/icon-delete.svg';
import IconFilter from './img/icon-filter.svg';

export const Choice = styled.span`
  position: relative;
  display: inline-block;
  min-width: 58px;
  padding-top: 6px;
  padding-bottom: 4px;
  padding-left: 16px;
  padding-right: 28px;
  border-radius: 12px;
  box-sizing: border-box;
  font-family: NanumSquareRound;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  vertical-align: middle;
  height: 24px;
  box-sizing: border-box;

  ${({ size }) => {
    switch (size) {
      case 'lg':
        return `
        padding-top: 9px;
        padding-bottom: 9px;
        border-radius: 16px;
        `;
    }
  }}

  ${({ isChoosed }) => {
    switch (isChoosed) {
      case true:
        return `
          background: #EF586A;
          color: #fff;
        `;
      case false:
      default:
        return ` 
          background: rgba(232, 218, 220, 0.2);
          color: #000;
        `;
    }
  }}

  ${({ disabled }) => {
    switch (disabled) {
      case true:
        return `
          cursor: not-allowed;
          pointer-events: none;
        `;
    }
  }}
`;

export const Text = styled.span`
  cursor: pointer;
`;

export const BtnAllow = styled.button`
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 6px;
  margin-top: -12px;
  width: 24px;
  height: 24px;
  border: none;
  background: url(${IconArrowBottom}) center center no-repeat;
  cursor: pointer;
`;

export const BtnDelete = styled.button`
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 3px;
  margin-top: -12px;
  width: 24px;
  height: 24px;
  border: none;
  background: url(${IconDelete}) center center no-repeat;
  cursor: pointer;
`;

export const BtnFilter = styled.span`
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 3px;
  margin-top: -12px;
  width: 24px;
  height: 24px;
  border: none;
  background: url(${IconFilter}) center center no-repeat;
  cursor: pointer;
`;
