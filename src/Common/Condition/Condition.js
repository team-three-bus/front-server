import React from 'react';

import * as S from './Condition.styles';

const Container = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

export const Box = ({ children }) => {
  return <S.Box>{children}</S.Box>;
};

export const Title = ({ children }) => {
  return <S.Title>{children}</S.Title>;
};

export const Contents = ({ children }) => {
  return <S.Contents>{children}</S.Contents>;
};

export const Content = ({ children, on }) => {
  return <S.Content on={on}>{children}</S.Content>;
};

export default Container;
