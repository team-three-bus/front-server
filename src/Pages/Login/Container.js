import React from 'react';
import { useNavigate } from 'react-router-dom';

import View from './View';

const Container = () => {
  const token = localStorage.getItem('access_token');
  const navigate = useNavigate();

  const REST_API_KEY = React.useRef('23c0a0c03900fcb72185e2dd8ecc9df3');
  const REDIRECT_URI = React.useRef('http://localhost:3000/oauth');
  const loginurl = React.useRef(
    `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY.current}&redirect_uri=${REDIRECT_URI.current}&response_type=code`
  );
  React.useEffect(() => {
    if (token == 'undefined') {
      navigate({
        pathname: '/',
      });
      return null;
    }
  }, []);

  return <View loginurl={loginurl.current} />;
};

export default Container;
