import * as S from './Mark.styles';

const Mark = ({ children }) => {
  return (
    <S.Mark>
      {children}
      <S.MarkBtn />
    </S.Mark>
  );
};

export { Mark };
