import React from 'react';
import { useNavigate } from 'react-router-dom';

import View from './View';

import { URL } from 'Common/Util/Constant';

const Container = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = React.useState('');
  const [originNickname, setOriginNickname] = React.useState('');

  React.useEffect(() => {
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
        setOriginNickname(nickname);
      });
  }, []);

  const updateNickname = (nickname) => {
    const regex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;
    const isValidation = regex.test(nickname);
    if (nickname === '') {
      setNickname(nickname);
      return;
    }

    if (isValidation) setNickname(nickname);
  };

  const changeNickname = (nickname) => {
    const token = localStorage.getItem('access_token');

    fetch(`${URL.API_SERVER}users/myname`, {
      method: 'PUT',
      headers: {
        authorization: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nickname: nickname,
      }),
    }).then((res) => {
      if (res.status !== 200) {
        return alert('error');
      }
      navigate('/mypage');
    });
  };

  const [popOn, setPopOn] = React.useState(false);

  const openPopDeleteAcount = () => {
    setPopOn(true);
  };
  const closePopDeleteAcount = () => {
    setPopOn(false);
  };

  const deleteAcount = () => {
    const token = localStorage.getItem('access_token');

    fetch(`${URL.API_SERVER}users`, {
      method: 'DELETE',
      headers: {
        authorization: token,
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (res.status !== 200) {
        return alert('error');
      }
      localStorage.removeItem('access_token');
      navigate('/');
    });
  };

  return (
    <View
      nickname={nickname}
      setNickname={updateNickname}
      originNickname={originNickname}
      changeNickname={changeNickname}
      popOn={popOn}
      setPopOn={setPopOn}
      openPopDeleteAcount={openPopDeleteAcount}
      closePopDeleteAcount={closePopDeleteAcount}
      deleteAcount={deleteAcount}
    />
  );
};

export default Container;
