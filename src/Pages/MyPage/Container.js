import React from 'react';

import View from './View';

const Container = () => {
  const [nickname, setNickname] = React.useState('');

  React.useEffect(() => {
    const access_token = localStorage.getItem('access_token');
    fetch('http://133.186.208.125:3000/users/mypage', {
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
  return <View nickname={nickname} />;
};

export default Container;
