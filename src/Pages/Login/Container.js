import React from 'react';

import View from './View';

const Container = () => {
  const REST_API_KEY = React.useRef('23c0a0c03900fcb72185e2dd8ecc9df3');
  const REDIRECT_URI = React.useRef('http://20d4-211-193-55-85.ngrok.io/oauth');
  const loginurl = React.useRef(
    `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY.current}&redirect_uri=${REDIRECT_URI.current}&response_type=code`
  );
  return <View loginurl={loginurl.current} />;
};

export default Container;
