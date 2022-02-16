import React from 'react';
import { Layout } from 'Common/Layout';
import styled from 'styled-components';

const MyPage = styled.div`
  padding: 0 20px;
`

const MyPageTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-item: center;
  margin: 26px 0 55px;
`

const Nickname = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 21px;
  line-height: 24px;
  color: #343A40;
  strong {
    font-weight: 800;
  }
`

const Logout = styled.p`
  margin: 0;
  font-size: 13px;
  line-height: 21px;
  color: #B0B0B0;
  cursor: pointer;
`

const View = ({ nickname, onClickLogout }) => {
  return (
    <>
    <Layout header='sub' title='마이페이지' />
    <MyPage>
      <MyPageTop>
        <Nickname><strong>{nickname}</strong> 님</Nickname> 
        <Logout onClick={onClickLogout}>로그아웃</Logout>
      </MyPageTop>
    </MyPage>
    </>
  );
};

export default View;
