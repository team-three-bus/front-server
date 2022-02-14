import React from 'react';

import * as S from './Detail.styles';
import * as H from 'Common/Helper';

import { Layout } from 'Common/Layout';
import { ProductInfo } from 'Common/ProductInfo';

import tempProductImg from 'Common/Product/img/tempProductImg.jpg';

const View = ({}) => {
  return (
    <Layout header='sub' title='서울) 비요뜨' share={true}>
      <ProductInfo
        img={tempProductImg}
        title={'서울) 비요뜨'}
        price={`1,500원 (1개당 750원)`}
        like={true}
        plus={'oneone'}
        store={'emart24'}
      />
    </Layout>
  );
};

export default View;
