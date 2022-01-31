import React from 'react';

import * as S from './MyLike.styles';

import { Checkbox } from 'Common/Form';
import { Product } from 'Common/Product';
import tempProductImg from 'Common/Product/img/tempProductImg.jpg';
import { ItemList, Item } from 'Common/ItemList';

const View = ({ isEvent, setIsEvent }) => {
  return (
    <>
      <Checkbox
        id='isEvent'
        name='isEvent'
        label={`행사 중 상품만 보기`}
        checked={isEvent}
        onChange={(checked) => {
          setIsEvent(checked);
        }}
      />
      {
        <ItemList>
          <Item>
            <Product
              img={tempProductImg}
              title={`서울) 비요뜨`}
              store={`emart24`}
              plus={`oneone`}
              price={1500}
            />
          </Item>
          <Item>
            <Product
              img={tempProductImg}
              title={`서울) 비요뜨`}
              store={`emart24`}
              plus={`oneone`}
              price={1500}
            />
          </Item>
          <Item>
            <Product
              img={tempProductImg}
              title={`서울) 비요뜨`}
              store={`emart24`}
              plus={`oneone`}
              price={1500}
            />
          </Item>
          <Item>
            <Product
              img={tempProductImg}
              title={`서울) 비요뜨`}
              store={`emart24`}
              plus={`oneone`}
              price={1500}
            />
          </Item>
          <Item>
            <Product
              img={tempProductImg}
              title={`서울) 비요뜨`}
              store={`emart24`}
              plus={`oneone`}
              price={1500}
            />
          </Item>
        </ItemList>
      }
    </>
  );
};

export default View;
