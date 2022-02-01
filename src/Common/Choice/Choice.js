import React from 'react';

import * as S from './Choice.styles';

const Choice = ({ children, isChoosed, deleteChoice, size, onClick }) => {
  return (
    <S.Choice isChoosed={isChoosed} size={size} onClick={onClick}>
      <S.Text>{children}</S.Text>
      {isChoosed === true ? (
        <S.BtnDelete type='button' onClick={deleteChoice} />
      ) : isChoosed === 'filter' ? (
        <S.BtnFilter type='button' />
      ) : (
        <S.BtnAllow type='button' />
      )}
    </S.Choice>
  );
};

export default Choice;
