import React from 'react';

import View from './View';

const Oauth = () => {
  const [access_token, setAccess_token] = React.useState('');
  const [token, setToken] = React.useState('');

  React.useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    const REST_API_KEY = '23c0a0c03900fcb72185e2dd8ecc9df3';

    const data = {
      code: code,
      client_id: REST_API_KEY,
      grant_type: 'authorization_code',
      redirect_uri: 'http://localhost:3000/oauth',
      client_secret: '82g8ZwhdZphpEE41gbnqjZtilv0jtnMS',
    };

    let formBody = [];
    for (let property in data) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      //   mode: 'cors', // no-cors, cors, *same-origin
      //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      //   //   credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody,
    })
      .then((res) => {
        return res.json();
      })
      .then(({ access_token }) => {
        setAccess_token(access_token);
        localStorage.setItem('access_token', access_token);

        fetch('http://133.186.208.125:3000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            authorization: access_token,
          },
        })
          .then((data) => data.json())
          .then((data) => {
            setToken(data.jwt);
            localStorage.setItem('token', data.jwt);
          });
      });
  }, []);

  return <View />;
};

export default Oauth;
