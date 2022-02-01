import React from 'react';

import * as S from './MyLike.styles';

import { Layout } from 'Common/Layout';
import { Title } from 'Common/Title';
import { Choice } from 'Common/Choice';
import { Checkbox } from 'Common/Form';
import { Product } from 'Common/Product';
import tempProductImg from 'Common/Product/img/tempProductImg.jpg';
import { ItemList, Item } from 'Common/ItemList';

const View = ({ isEvent, setIsEvent }) => {
  return (
    <Layout header='sub' title='완내스'>
      <Title
        sort='main'
        icon='like'
        title='완전 내 스타일!'
        subTitle='찜한 상품을 모아서 볼 수 있어요.'
      />
      <S.FilterBox>
        <Choice isChoosed={false}>편의점</Choice>
        <Choice isChoosed={true}>카테고리 2</Choice>
      </S.FilterBox>
      <Title
        sort={'result'}
        right={
          <Checkbox
            id='isEvent'
            name='isEvent'
            label={`행사 중 상품만 보기`}
            checked={isEvent}
            onChange={(checked) => {
              setIsEvent(checked);
            }}
          />
        }
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
    </Layout>
  );
};

export default View;
