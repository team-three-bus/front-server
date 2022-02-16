import styled from 'styled-components';

export const Decide = styled.button`
  display: inline-block;
  height: 32px;
  padding: 6px 10px;
  border: 1px solid rgba(0, 0, 0, 0.18);
  border-radius: 16px;
  background: #ffffff;
  box-sizing: border-box;
  font-family: NanumSquareRound;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  color: rgba(0, 0, 0, 0.18);
  cursor: pointer;

  ${({ on }) => {
    switch (on) {
      case true:
        return `
            border: 1px solid #EF586A;
            background: #EF586A;
            color: #fff;
        `;
    }
  }}
`;

export const DecideList = styled.div`
  padding-top: 8px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 8px;
  overflow-x: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
    visibility: hidden;
  }
  &::-webkit-scrollbar-thumb {
    background: transparent;
  }

  ${Decide} {
    margin-left: 12px;
  }
  ${({ line }) => {
    switch (line) {
      case 'bottom':
        return `border-bottom: 1px solid #E9ECEF;`;
    }
  }}
`;
