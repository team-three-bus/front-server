import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Oauth = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    const REST_API_KEY = '23c0a0c03900fcb72185e2dd8ecc9df3';

    const data = {
      code: code,
      client_id: REST_API_KEY,
      grant_type: 'authorization_code',
      redirect_uri: 'http://pyunha.com/oauth',
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
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody,
    })
      .then((res) => res.json())
      .then(({ access_token }) => {
        fetch('http://133.186.208.125:3000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            authorization: access_token,
          },
        })
          .then((data) => data.json())
          .then((data) => {
            localStorage.setItem('access_token', data.jwt);
            navigate('/');
          });
      });
  }, []);

  return null;
};

export default Oauth;
