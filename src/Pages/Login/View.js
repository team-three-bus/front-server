import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import infoImg from './img/logo.svg';
import kakaoIcon from "./img/kakao-icon.svg";

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
`

const LoginCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LoginBottom = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 32px;
`

const LoginInfoImg = styled.img`
  width: 295px;
  max-width: 100%;
  margin: calc(147 / 774 * 100vh) 0 calc(14 / 774 * 100vh);
`

const LoginInfoText = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  white-space: pre-wrap;
  text-align: center;
`

const LoginBtn = styled.a`
  display: flex;
  justify-content: center;
  width: calc(344 / 384 * 100vw);
  line-height: 56px;
  border-radius: 40px;
  color : #191919;
  background: #FEE500;
  font-weight: 800;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
  &:active {
    color : inherit;
  }
`

const KakaoIcon = styled.img`
  margin-right: 11px;
`

const LoginTerm = styled.p`
  white-space: pre-wrap;
  text-align: center;
  font-size: 12px;
  line-height: 14px;
  color: #868E96;
  a {
    color: #212529;
  }
`

const View = ({ loginurl }) => {
  return (
    <LoginBox>
      <LoginCenter>
        <LoginInfoImg src={infoImg} alt="" />
        <LoginInfoText>{`가입/로그인 하시면 상품을 찜할 수 있어요!\n로그인하러 가시겠어요?`}</LoginInfoText>
      </LoginCenter>
      <LoginBottom>
        <LoginBtn href={loginurl}>
          <KakaoIcon src={kakaoIcon} alt="kakao Icon" />
          카카오 ID로 로그인
        </LoginBtn>
        {/* TODO: 약관 Link 수정 */}
        <LoginTerm>계정 등록 시 편하의 <Link to="/term">이용 약관</Link>에 동의하며 <br/><Link to="/term">개인 정보 처리방침</Link>을 읽은것으로 간주됩니다.</LoginTerm>
      </LoginBottom>
    </LoginBox>
  );
};

export default View;
