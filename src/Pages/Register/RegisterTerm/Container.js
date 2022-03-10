import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as H from 'Common/Helper';

import View from './View';

import { URL as API_URL } from 'Common/Util/Constant';

const Container = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const access_token = localStorage.getItem('kakao_access_token');
    if (!access_token) {
      navigate('/');
    }
  }, []);
  const [termList, setTermList] = React.useState({
    all: {
      label: '모든 약관에 동의합니다.',
      checked: false,
    },
    terms: [
      {
        label: (
          <>
            <H.PrimaryColor>(필수)</H.PrimaryColor> 서비스 이용약관 동의
          </>
        ),
        id: 'serviceTerm',
        checked: false,
        link: '/',
      },
      {
        label: (
          <>
            <H.PrimaryColor>(필수)</H.PrimaryColor> 개인정보처리방침 동의
          </>
        ),
        id: 'peronsalTerm',
        checked: false,
        link: '/',
      },
    ],
  });

  const confirmRegister = () => {
    if (termList.all.checked) {
      const access_token = localStorage.getItem('kakao_access_token');
      fetch(`${API_URL.API_SERVER}users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: access_token,
        },
      })
        .then((data) => data.json())
        .then((data) => {
          localStorage.setItem('access_token', data.jwt);
          localStorage.removeItem('kakao_access_token');
          navigate('/');
        });
    }
  };
  const register = () => {};
  return (
    <View
      termList={termList}
      setTermList={setTermList}
      confirmRegister={confirmRegister}
    />
  );
};

export default Container;
