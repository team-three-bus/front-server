import styled from 'styled-components';

import IconCheck from './img/icon-check.svg';

export const UICheckbox = styled.div`
  display: inline-block;
  vertical-align: middle;
  padding-top: 9px;
  padding-bottom: 9px;
`;

export const Checkbox = styled.input`
  position: relative;
  display: inline-block;
  width: 18px;
  height: 18px;
  margin: 0;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  box-sizing: border-box;
  vertical-align: middle;
  background-color: #f8f9fa;
  appearance: none;
  ${({ checked }) => {
    return checked
      ? `
        background: #EF586A url(${IconCheck}) center center no-repeat;
        border: 1px solid #EF586A;
      `
      : '';
  }}
`;

export const Label = styled.label`
  font-family: NanumSquare;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  text-align: right;
  color: #000000;
  margin-left: 9px;
  vertical-align: middle;

  ${({ size }) => {
    switch (size) {
      case 'lg':
        return `
          font-size: 14px;
        `;
    }
  }}
`;
