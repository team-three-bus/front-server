import React from 'react';

import * as S from './TextBtn.styles';

const TextBtn = ({
  as,
  link,
  target,
  children,
  size,
  variant,
  type = `button`,
  onClick = () => {},
}) => {
  return (
    <S.TextBtn
      as={as}
      {...(!as ? { type } : {})}
      size={size}
      variant={variant}
      {...(!as ? { onClick } : {})}
      href={link}
      target={target}
    >
      {children}
    </S.TextBtn>
  );
};

export { TextBtn };
