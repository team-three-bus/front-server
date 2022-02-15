import * as S from './Product.styles';

const Product = ({
  id,
  size,
  img,
  store,
  plus,
  title,
  price,
  perprice,
  like,
  saleend,
  changeLike = () => {},
  gotoDetail = () => {},
}) => {
  return (
    <S.Product size={size} saleend={saleend}>
      <S.ImgBox size={size}>
        <S.Img
          src={img}
          alt={title}
          onClick={() => {
            gotoDetail(id);
          }}
        />
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
      <S.Info
        size={size}
        saleend={saleend}
        onClick={() => {
          gotoDetail(id);
        }}
      >
        <S.StoreType type={store}>
          {store == 'GS' || store == 'gs25'
            ? 'GS25'
            : store == 'emart24'
            ? 'emart24'
            : store == 'cu'
            ? 'CU'
            : store == 'seven11'
            ? '7-EVELEN'
            : store}
        </S.StoreType>
        <S.Title size={size}>{title}</S.Title>
        <S.Price size={size}>
          {price}원{' '}
          {perprice && (
            <S.PerPrice>(1개당 {perprice.toLocaleString()}원)</S.PerPrice>
          )}
        </S.Price>
      </S.Info>
    </S.Product>
  );
};

export { Product };
