import React from 'react';
import { Product } from 'Common/Product';

import * as S from './ProductInfo.styles';

const ProductInfo = ({
  id,
  img,
  title,
  price,
  perPrice,
  store,
  plus,
  like,
  changeLike,
  saleend,
}) => {
  return (
    <S.Container>
      <Product
        id={id}
        size={'lg'}
        img={img}
        title={title}
        price={price}
        perPrice={perPrice}
        store={store}
        plus={plus}
        like={like}
        changeLike={changeLike}
        saleend={saleend}
      />
    </S.Container>
  );
};

export default ProductInfo;
