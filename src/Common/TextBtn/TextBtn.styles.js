import styled from 'styled-components';

export const TextBtn = styled.button`
  font-family: NanumSquare;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: right;
  text-decoration: none;

  color: rgba(176, 176, 176, 1);

  border: none;
  background: none;

  ${({ size }) => {
    switch (size) {
      case 'sm':
        return `
          font-size: 12px;
        `;
      case 'lg':
        return `
          font-size: 14px;
        `;
    }
  }}

  ${({ variant }) => {
    switch (variant) {
      case 'line':
        return `
          color: #212529;
          padding-left: 0;
          padding-right: 0;
          padding-bottom: 2px; 
          border-bottom: 1px solid rgba(33, 37, 41, .5);
        `;
    }
  }}
`;
