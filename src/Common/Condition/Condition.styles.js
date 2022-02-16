import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  height: 34px;
  overflow: hidden;
  align-items: flex-start;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-bottom: 2px solid #e9ecef;
  }
`;
export const Contents = styled.div`
  overflow-x: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
    visibility: hidden;
  }
  &::-webkit-scrollbar-thumb {
    background: transparent;
  }
  flex: 1;
`;

export const Content = styled.div`
  position: relative;
  display: inline-block;
  width: auto !important;
  padding-left: 16px;
  padding-right: 16px;
  font-family: NanumSquare;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  color: rgba(196, 196, 196, 1);
  line-height: 32px;
  cursor: pointer;

  ${({ on }) => {
    return on
      ? `
        color: #EF586A;
        border-bottom: 2px solid #EF586A;
      `
      : null;
  }}
`;
