import styled from 'styled-components';

import { Empty } from 'Common/Empty/Empty.styles';
import { Btn } from 'Common/Btn/Btn.styles';

export const FilterBox = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom: 10px solid #f8f9fa;

  & > span {
    margin-right: 8px;
  }
`;

export const EmptyBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 88px;

  ${({ cta }) => {
    switch (cta) {
      case true:
        return `
          min-height: 300px;
          height: -webkit-calc(100vh - 295px);
        `;
      default:
        return `
          min-height: 240px;
        `;
    }
  }}

  ${Empty} {
    height: auto;
    padding-bottom: 0;
  }

  ${Btn} {
    position: absolute;
    width: -webkit-calc(100% - 40px);
    left: 20px;
    right: 20px;
    bottom: 100px;
  }
`;
