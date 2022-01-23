import React from 'react';

import * as S from './ItemList.styles';

const Item = ({ children }) => {
  return <S.Item>{children}</S.Item>;
};

export default Item;
