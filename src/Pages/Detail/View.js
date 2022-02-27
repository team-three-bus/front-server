import React from 'react';

import * as S from './Detail.styles';
import * as H from 'Common/Helper';

import { Layout } from 'Common/Layout';
import { ProductInfo } from 'Common/ProductInfo';
import { Empty } from 'Common/Empty';

const View = ({ id, product, getPerPrice, changeLike }) => {
  if (!product) return <Empty text={`상품 데이터가 없습니다`} />;
  return (
    <Layout header='sub' title={product.name} share={true} search={false}>
      <ProductInfo
        id={id}
        img={product.imageUrl}
        title={product.name}
        price={product.price}
        perPrice={getPerPrice(product.price, product.event)}
        like={product.isLike}
        plus={product.event}
        store={product.brand}
        changeLike={changeLike}
        saleend={!product.isEvent}
      />
    </Layout>
  );
};

export default View;
