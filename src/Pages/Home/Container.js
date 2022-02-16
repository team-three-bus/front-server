import React from 'react';
import { useNavigate } from 'react-router-dom';
import View from './View';

function Container() {
  const navigate = useNavigate();

  const onSearchClick = () => {
    console.log('onSearchClick');
    navigate({
      pathname: '/search',
    });
  };

  return (
    <View
      onSearchClick={onSearchClick}
    />
  );
}

export default Container;
