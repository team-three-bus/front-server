import React from 'react';
import { Product } from 'Common/Product';

import * as S from './ProductInfo.styles';

const ProductInfo = ({
  img,
  title,
  price,
  perPrice,
  store,
  plus,
  like,
  changeLike,
}) => {
  return (
    <S.Container>
      <Product
        size={'lg'}
        img={img}
        title={title}
        price={price}
        perPrice={perPrice}
        store={store}
        plus={plus}
        like={like}
        changeLike={changeLike}
      />
    </S.Container>
  );
};

export default ProductInfo;
