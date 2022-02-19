import React from 'react';
import { Layout } from 'Common/Layout';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import settingIcon from './img/ic-setting.svg';
import heartIcon from './img/ic-heart.svg';
import listIcon from './img/ic-list.svg';
import mailIcon from './img/ic-mail.svg';

const MyPage = styled.div`
  box-sizing: border-box;
  max-width: 768px;
  min-height: calc(100vh - 64px);
  margin: 0 auto;
  padding: 0 20px;
  background: #fff;
`;

const MyPageTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-item: center;
  padding: 26px 0 55px;
`;

const MyPageBottom = styled.div`
  display: flex;
  flex-direction: column;
`;

const MyPageButton = styled(Link)`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 56px;
  margin-bottom: 8px;
  padding-left: 25px;
  background: #f1f3f5;
  border-radius: 40px;
  border: none;
  outline: none;
  font-weight: bold;
  font-size: 14px;
  text-align: left;
  font-family: 'Apple SD Gothic Neo', sans-serif;
  color: #212529;
  text-decoration: none;
  img {
    margin-right: 14px;
  }
`;

const Nickname = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 21px;
  line-height: 24px;
  color: #343a40;
  strong {
    font-weight: 800;
  }
`;

const Logout = styled.p`
  margin: 0;
  font-size: 13px;
  line-height: 21px;
  color: #b0b0b0;
  cursor: pointer;
`;

const View = ({ nickname, onClickLogout }) => {
  return (
    <>
      <Layout header='sub' title='마이페이지' />
      <MyPage>
        <MyPageTop>
          <Nickname>
            <strong>{nickname}</strong> 님
          </Nickname>
          <Logout onClick={onClickLogout}>로그아웃</Logout>
        </MyPageTop>
        <MyPageBottom>
          {/* TODO : 맞는 링크로 이동 처리 */}
          {/* {<MyPageButton to="/"><img src={settingIcon}/>정보 설정</MyPageButton>} */}
          <MyPageButton to='/mylike'>
            <img src={heartIcon} />
            완.내.스!
          </MyPageButton>
          {/* {<MyPageButton to='/'>
            <img src={listIcon} />
            서비스 소개
          </MyPageButton>} */}
          {/* {<MyPageButton to='/'>
            <img src={mailIcon} />
            문의하기
          </MyPageButton>} */}
        </MyPageBottom>
      </MyPage>
    </>
  );
};

export default View;
