import styled from 'styled-components';

import Iconreset from './img/icon-reset.svg';

export const IconTextBtn = styled.button`
  border: none;
  background: #fff;
  white-space: nowrap;
  cursor: pointer;
`;
export const Icon = styled.span`
  display: inline-block;
  width: 28px;
  height: 28px;
  vertical-align: middle;
  ${({ icon }) => {
    switch (icon) {
      case 'reset':
        return `background: url(${Iconreset}) center center no-repeat;`;
    }
  }}
`;
export const Text = styled.span`
  padding-left: 3px;
  font-family: NanumSquareRound;
  font-size: 14px;
  font-weight: 800;
  line-height: 16px;
  text-align: left;
  color: #000000;
  vertical-align: middle;
  white-space: nowrap;
`;
