import React from 'react';

import * as S from './TextBtn.styles';

const TextBtn = ({ children, type = `button` }) => {
  return <S.TextBtn type={type}>{children}</S.TextBtn>;
};

export { TextBtn };
