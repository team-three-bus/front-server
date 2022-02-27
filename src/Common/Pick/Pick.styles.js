import styled from 'styled-components';

export const Pick = styled.button`
  display: inline-block;
  height: 32px;
  padding: 6px 10px;
  border: 1px solid rgba(0, 0, 0, 0.18);
  border-radius: 16px;
  background: #ffffff;
  box-sizing: border-box;
  font-family: NanumSquareRound;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  color: #212529;
  cursor: pointer;
  outline: none;

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

export const PickList = styled.div`
  margin-top: 32px;

  &:first-child {
    margin-top: 0;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-family: NanumSquareRound;
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  text-align: left;

  color: #868e96;
`;

export const List = styled.div`
  margin-top: 3px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  text-align: left;
  color: #868e96;

  & > ${Pick} {
    margin-right: 8px;
    margin-top: 12px;
  }
`;
