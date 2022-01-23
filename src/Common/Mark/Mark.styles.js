import styled from 'styled-components';

export const Mark = styled.span`
  display: inline-block;
  position: relative;
  min-height: 32px;
  padding-right: 34px;
  padding-top: 10px;
  padding-bottom: 10px;
  box-sizing: border-box;
  font-family: NanumSquare;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  border-bottom: 1px solid rgba(181, 181, 181, 0.5);
`;
export const MarkBtn = styled.button`
  display: block;
  position: relative;
  width: 12px;
  height: 12px;
  background: none;
  border: none;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 14px;
    height: 1px;
    background: #b5b5b5;
    top: 50%;
    left: 50%;
    margin-left: -7px;
  }

  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }

  ${Mark} > & {
    position: absolute;
    top: 50%;
    right: 12px;
    margin-top: -6px;
  }
`;

export const MarkBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 17px;
  padding-left: 20px;
  padding-right: 20px;
  gap: 18px;

  ${Mark} {
    width: -webkit-calc(50% - 9px);
    margin-bottom: 9px;
  }
`;
