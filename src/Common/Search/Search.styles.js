import styled from 'styled-components';

import IconSearch from './img/icon-search.svg';
import IconDelete from './img/icon-delete.svg';
import Btnearch from './img/btn-search.svg';
export const Search = styled.div`
  position: relative;
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  ${({ sort }) => {
    switch (sort) {
      case 'basic':
        return `
          width: -webkit-calc(100% - 48px);
      `;
    }
  }}
`;

export const Input = styled.input`
  flex: 1;

  height: 48px;
  border: 2px solid #f1f3f5;
  box-sizing: border-box;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
  color: #868e96;
  width: 100%;

  -webkit-appearance: none;

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  ${({ sort }) => {
    switch (sort) {
      case 'default':
        return `
          padding: 17px 5px 15px 45px;
          background: rgba(249, 249, 249, 1) url(${IconSearch}) 16px 13px no-repeat;
      `;
      case 'basic':
        return `
          width: -webkit-calc(100% - 48px);
          padding: 12px 42px 15px 12px;
          background: rgba(249, 249, 249, 1);
      `;
    }
  }}

  &::placeholder {
    color: #868e96;
  }

  &:focus {
    outline: none;
  }
`;

export const BtnDelete = styled.button`
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 12px;
  width: 18px;
  height: 18px;
  margin-top: -9px;
  border: none;
  border-radius: 50%;
  background: #c4c4c4 url(${IconDelete}) center center no-repeat;
  cursor: pointer;
`;

export const BtnSearch = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: none;
  background: url(${IconSearch}) center center no-repeat;
  vertical-align: middle;
  cursor: pointer;
`;
