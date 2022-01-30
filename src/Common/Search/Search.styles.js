import styled from 'styled-components';

import IconSearch from './img/icon-search.svg';

export const Search = styled.div`
  display: inline-block;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 17px 5px 15px 45px;
  border: 1px solid rgba(249, 249, 249, 1);
  box-sizing: border-box;
  background: rgba(249, 249, 249, 1) url(${IconSearch}) 16px 13px no-repeat;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;

  color: #868e96;

  &::placeholder {
    color: #868e96;
  }

  &:focus {
    outline: none;
  }
`;
