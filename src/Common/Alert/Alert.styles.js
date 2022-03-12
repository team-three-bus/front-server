import styled from 'styled-components';

import ImgDefault from './img/img-default.png';

import { Btn } from 'Common/Btn/Btn.styles';

export const Alert = styled.div`
  ${({ on }) => {
    switch (on) {
      case true:
        return `
          display: block;
        `;
      default:
        return `
          display: none;
        `;
    }
  }}
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
`;
export const Wrap = styled.div`
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 20px;
  right: 20px;
  transform: translateY(-50%);
  border-radius: 8px;
  background: #fff;
`;
export const Header = styled.div`
  padding: 36px 10px 17px;
  font-family: NanumSquareRound;
  font-size: 21px;
  font-weight: 800;
  line-height: 18px;
  text-align: center;
`;
export const Content = styled.div`
  padding: 0 10px;
  font-family: NanumSquareRound;
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  text-align: center;
`;
export const ImgBox = styled.div`
  margin: 8px auto 12px;
  width: 128px;
  height: 128px;
  background: url(${ImgDefault}) center center no-repeat;
  background-size: 100%;
`;
export const Footer = styled.div`
  display: flex;

  ${Btn} {
    flex: 1;
  }
  ${Btn} + ${Btn} {
    flex: 63%;
  }
`;
