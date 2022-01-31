import styled from 'styled-components';

export const UIRadio = styled.div`
  display: inline-block;
  vertical-align: middle;
  padding-top: 9px;
  padding-bottom: 9px;
`;

export const Radio = styled.input`
  position: relative;
  display: inline-block;
  width: 18px;
  height: 18px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  box-sizing: border-box;
  vertical-align: middle;
  appearance: none;
  ${({ checked }) => {
    return checked
      ? `
        &:after {
          content: '';
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          margin-top: -6px;
          margin-left: -6px;
          width: 12px;
          height: 13px;
          border-radius: 50%;
          background: #EF586A;
        }
      `
      : '';
  }}
`;

export const Label = styled.label`
  font-family: NanumSquareRound;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: left;
  color: #212529;
  margin-left: 9px;
  vertical-align: middle;
`;
