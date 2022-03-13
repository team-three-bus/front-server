import React from 'react';

import * as S from './Product.styles';
import NoImg from './img/noImg.png';
import { set } from 'lodash';

const Product = ({
  id,
  size,
  img,
  store,
  plus,
  title,
  price,
  perPrice,
  like,
  saleend,
  changeLike = () => {},
  gotoDetail = () => {},
}) => {
  const [isNoImg, setISNoImg] = React.useState(false);

  return (
    <S.Product size={size} saleend={saleend}>
      <S.ImgBox size={size} isNoImg={isNoImg}>
        <S.Img
          src={img}
          alt={title}
          onClick={() => {
            gotoDetail(id);
          }}
          onError={(e) => {
            setISNoImg(true);
            return (e.target.src = NoImg);
          }}
        />
        <S.Plus plus={plus}>
          {plus === 'oneone' || plus === '1+1'
            ? `1+1`
            : plus === 'twoone' || plus === '2+1'
            ? `2+1`
            : null}
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
          {price.toLocaleString('ko-KR')}원{' '}
          {perPrice && (
            <S.PerPrice>(1개당 {perPrice.toLocaleString()}원)</S.PerPrice>
          )}
        </S.Price>
      </S.Info>
    </S.Product>
  );
};

export { Product };
