import React from 'react';

import * as S from './SearchResult.styles';
import * as H from 'Common/Helper';

import { Layout } from 'Common/Layout';
import { Decide, DecideList } from 'Common/Decide';
import { Choice } from 'Common/Choice';
import { Title } from 'Common/Title';
import { Product } from 'Common/Product';
import tempProductImg from 'Common/Product/img/tempProductImg.jpg';
import { ItemList, Item } from 'Common/ItemList';

const View = ({ searchValue, onSearchChange, onSearch }) => {
  return (
    <Layout
      header='search'
      line={true}
      searchValue={searchValue}
      onSearchChange={onSearchChange}
      onSearch={onSearch}
    >
      <DecideList line='bottom'>
        <Decide>GS25</Decide>
        <Decide>CU</Decide>
        <Decide>7-ELEVEN</Decide>
        <Decide>emart24</Decide>
      </DecideList>
      <S.DecideChoice>
        <DecideList>
          <Decide>1+1</Decide>
          <Decide>2+1</Decide>
        </DecideList>
        <Choice size='lg' isChoosed={false}>
          카테고리
        </Choice>
      </S.DecideChoice>
      <Title
        right={<Choice isChoosed={false}>연관순</Choice>}
        sort='result'
        title={
          <>
            <strong>
              총 <H.PrimaryColor>23</H.PrimaryColor>개
            </strong>
            의 상품이 있습니다
          </>
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
              isEvent={true}
            />
          </Item>
          <Item>
            <Product
              img={tempProductImg}
              title={`서울) 비요뜨`}
              store={`emart24`}
              plus={`oneone`}
              price={1500}
              isEvent={true}
            />
          </Item>
          <Item>
            <Product
              img={tempProductImg}
              title={`서울) 비요뜨`}
              store={`emart24`}
              plus={`oneone`}
              price={1500}
              isEvent={true}
            />
          </Item>
          <Item>
            <Product
              img={tempProductImg}
              title={`서울) 비요뜨`}
              store={`emart24`}
              plus={`oneone`}
              price={1500}
              isEvent={true}
            />
          </Item>
          <Item>
            <Product
              img={tempProductImg}
              title={`서울) 비요뜨`}
              store={`emart24`}
              plus={`oneone`}
              price={1500}
              isEvent={true}
            />
          </Item>
        </ItemList>
      }
    </Layout>
  );
};

export default View;
