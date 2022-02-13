import React from 'react';

import * as S from './Choice.styles';

const Choice = ({
  children,
  isChoosed,
  deleteChoice,
  size,
  disabled,
  onClick,
}) => {
  return (
    <S.Choice
      isChoosed={isChoosed}
      size={size}
      disabled={disabled}
      onClick={() => {
        if (isChoosed !== true) onClick();
      }}
    >
      <S.Text
        onClick={() => {
          if (isChoosed === true) onClick();
        }}
      >
        {children}
      </S.Text>
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
