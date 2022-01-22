import * as S from './Product.styles';

const Product = ({ size, img, store, plus, title, price }) => {
  return (
    <S.Product size={size}>
      <S.ImgBox size={size}>
        <S.Img src={img} alt={title} />
        <S.Plus>
          {plus == 'oneone' ? `1+1` : plus == 'twoone' ? `2+1` : null}
        </S.Plus>
        <S.Like />
      </S.ImgBox>
      <S.Info>
        <S.StoreType type={store}>
          {store == 'emart24'
            ? `emart24`
            : store == 'cu'
            ? `CU`
            : store == 'seven11'
            ? 'Seven 11'
            : store == 'gs25'
            ? 'GS 25'
            : null}
        </S.StoreType>
        <S.Title>{title}</S.Title>
        <S.Price>{price}원</S.Price>
      </S.Info>
    </S.Product>
  );
};

export { Product };
