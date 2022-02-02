import React from './IconTextBtn';

import * as S from './IconTextBtn.styles';

const IconTextBtn = ({ icon, children, onClick }) => {
  return (
    <S.IconTextBtn onClick={onClick}>
      <S.Icon icon={icon} />
      <S.Text>{children}</S.Text>
    </S.IconTextBtn>
  );
};

export default IconTextBtn;
