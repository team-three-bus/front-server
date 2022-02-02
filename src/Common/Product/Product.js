import * as S from './Product.styles';

const Product = ({ size, img, store, plus, title, price, like, saleend }) => {
  return (
    <S.Product size={size} saleend={saleend}>
      <S.ImgBox size={size}>
        <S.Img src={img} alt={title} />
        <S.Plus plus={plus}>
          {plus == 'oneone' ? `1+1` : plus == 'twoone' ? `2+1` : null}
        </S.Plus>
        <S.Like on={like} />
        {saleend && <S.SaleEnd />}
      </S.ImgBox>
      <S.Info saleend={saleend}>
        <S.StoreType type={store}>
          {store == 'emart24'
            ? `emart24`
            : store == 'cu'
            ? `CU`
            : store == 'seven11'
            ? '7-ElEVEN'
            : store == 'gs25'
            ? 'GS 25'
            : null}
        </S.StoreType>
        <S.Title>{title}</S.Title>
        <S.Price>{price.toLocaleString()}원</S.Price>
      </S.Info>
    </S.Product>
  );
};

export { Product };
