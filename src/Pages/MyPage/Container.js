import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import View from './View';

const Container = () => {
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {
    const access_token = localStorage.getItem('access_token');
    
    if ( !access_token ) {
      navigate('/');
    } 
    
    fetch('http://133.186.208.125:3000/users/mypage', {
      method: 'GET',
      headers: {
        authorization: access_token,
      },
    })
      .then((res) => res.json())
      .then(({ nickname }) => {
        setNickname(nickname);
        localStorage.setItem('nickname', nickname);
      });
  }, []);
  
  const onClickLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('nickname',);
    navigate('/login');
  }
  
  return (
    <View 
      nickname={nickname} 
      onClickLogout={onClickLogout}
    />
  );
};

export default Container;
