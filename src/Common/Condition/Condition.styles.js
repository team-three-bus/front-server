import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;

export const Box = styled.div`
  display: flex;
  height: 46px;
  overflow: hidden;
  align-items: center;
  margin-top: 6px;
  border-bottom: 1px solid rgba(181, 181, 181, 0.2);
  align-items: flex-start;

  &:first-child {
    margin-top: 0;
  }
`;

export const Title = styled.div`
  width: 80px;
  font-family: NanumSquare;
  font-size: 14px;
  font-weight: 800;
  line-height: 16px;
  text-align: left;
  align-self: center;
  color: rgba(120, 121, 241, 1);
`;
export const Contents = styled.div`
  flex: 1;
  width: -webkit-calc(100% - 80px);

  height: 63px;
`;

export const Content = styled.div`
  display: inline-block;
  margin-right: 24px;
  font-family: NanumSquare;
  font-size: 14px;
  font-weight: 800;
  text-align: center;
  color: rgba(196, 196, 196, 1);
  line-height: 46px;

  ${({ on }) => {
    return on ? 'color: rgba(0, 0, 0, 1)' : null;
  }}
`;
