import * as S from './Product.styles';

const Product = ({
  id,
  size,
  img,
  store,
  plus,
  title,
  price,
  like,
  saleend,
  changeLike,
  gotoDetail,
}) => {
  return (
    <S.Product size={size} saleend={saleend}>
      <S.ImgBox size={size}>
        <S.Img src={img} alt={title} onClick={gotoDetail} />
        <S.Plus plus={plus}>
          {plus == 'oneone' ? `1+1` : plus == 'twoone' ? `2+1` : null}
        </S.Plus>
        <S.Like
          on={like}
          onClick={() => {
            changeLike({ id, isLike: like });
          }}
        />
        {saleend && <S.SaleEnd />}
      </S.ImgBox>
      <S.Info saleend={saleend} onClick={gotoDetail}>
        <S.StoreType type={store}>
          {store == 'GS' ? 'GS25' : store}
        </S.StoreType>
        <S.Title>{title}</S.Title>
        <S.Price>{price.toLocaleString()}원</S.Price>
      </S.Info>
    </S.Product>
  );
};

export { Product };
