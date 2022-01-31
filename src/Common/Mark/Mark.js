import * as S from './Mark.styles';

const Mark = ({ children, id, deleteMark }) => {
  return (
    <S.Mark>
      {children}
      <S.MarkBtn
        onClick={() => {
          deleteMark(id);
        }}
      />
    </S.Mark>
  );
};

export { Mark };
