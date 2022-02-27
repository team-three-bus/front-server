import * as S from './Feature.styles';

const Feature = ({ children, onClick }) => {
  return <S.Feature onClick={onClick}>{children}</S.Feature>;
};

export { Feature };
