import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import View from './View';

import { URL } from 'Common/Util/Constant';

const Container = () => {
  const mailto = React.useRef(`mailto:pyunha.contact@gmail.com`);
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const access_token = localStorage.getItem('access_token');

    if (!access_token) {
      navigate('/');
    }

    fetch(`${URL.API_SERVER}users/mypage`, {
      method: 'GET',
      headers: {
        authorization: access_token,
      },
    })
      .then((res) => res.json())
      .then(({ nickname }) => {
        setNickname(nickname);
      });
  }, []);

  const onClickLogout = () => {
    localStorage.removeItem('access_token');
    navigate('/login');
  };

  return (
    <View
      nickname={nickname}
      onClickLogout={onClickLogout}
      mailto={mailto.current}
    />
  );
};

export default Container;
