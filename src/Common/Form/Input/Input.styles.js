import styled from 'styled-components';

import IconDelete from './img/icon-delete.svg';

export const UIInput = styled.div`
  width: 100%;
  display: inline-block;
  position: relative;
  vertical-align: middle;
`;

export const Input = styled.input`
  width: 100%;
  height: 36px;
  padding-left: 14px;
  border: 2px solid #f1f3f5;
  border-radius: 18px;
  background: #f8f9fa;
  font-family: NanumSquareRound;
  font-size: 14px;

  font-weight: 700;
  line-height: 16px;
  text-align: left;

  box-sizing: border-box;

  &::-webkit-input-placeholder {
    color: rgba(0, 0, 0, 0.38);
  }

  &:focus {
    outline: none;
  }
`;

export const BtnDelete = styled.button`
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 14px;
  width: 14px;
  height: 14px;
  margin: 0;
  padding: 0;
  margin-top: -7px;
  border: none;
  border-radius: 7px;
  background: #c4c4c4 url(${IconDelete}) center center no-repeat;
  cursor: pointer;
`;
