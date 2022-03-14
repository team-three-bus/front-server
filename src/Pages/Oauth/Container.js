import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { OAUTH } from 'Common/Util/Oauth';
import { URL as API_URL } from 'Common/Util/Constant';

const Oauth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    const REST_API_KEY = '23c0a0c03900fcb72185e2dd8ecc9df3';

    const data = {
      code: code,
      client_id: REST_API_KEY,
      grant_type: 'authorization_code',
      redirect_uri: OAUTH.REDIRECT_URI,
      client_secret: OAUTH.CLIENT_SECRET,
    };

    let formBody = [];
    for (let property in data) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody,
    })
      .then((res) => res.json())
      .then(({ access_token }) => {
        localStorage.setItem('kakao_access_token', access_token);
        fetch(`${API_URL.API_SERVER}users`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            authorization: access_token,
          },
        })
          .then((data) => data.json())
          .then((data) => {
            if (data.jwt) {
              localStorage.setItem('access_token', data.jwt);
              localStorage.removeItem('kakao_access_token');
              navigate('/');
            } else {
              navigate('/register');
            }
          });
      });
  }, []);

  return null;
};

export default Oauth;
