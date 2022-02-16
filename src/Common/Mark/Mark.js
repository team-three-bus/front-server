import * as S from './Mark.styles';

const Mark = ({ children, id, deleteMark, onClick }) => {
  return (
    <S.Mark>
      <S.Text
        onClick={() => {
          onClick(children);
        }}
      >
        {children}
      </S.Text>
      <S.MarkBtn
        onClick={() => {
          deleteMark(id);
        }}
      />
    </S.Mark>
  );
};

export { Mark };
