import React from 'react';

import * as S from './MyLike.styles';

import { Layout } from 'Common/Layout';
import { Title } from 'Common/Title';
import { Choice } from 'Common/Choice';
import { Checkbox } from 'Common/Form';
import { Product } from 'Common/Product';
import tempProductImg from 'Common/Product/img/tempProductImg.jpg';
import { ItemList, Item } from 'Common/ItemList';
import { FilterPopup } from 'Common/FilterPopup';

const View = ({
  isEvent,
  setIsEvent,
  filterOpen,
  setFilterOpen,
  setFilter,
  brandClick,
  categoryClick,
  categoryDeleteChoice,
  brandDeleteChoice,
  filter,
}) => {
  return (
    <Layout header='sub' title='완내스'>
      <Title
        sort='main'
        icon='like'
        title='완전 내 스타일!'
        subTitle='찜한 상품을 모아서 볼 수 있어요.'
      />
      <S.FilterBox>
        <Choice
          isChoosed={filter.brand.length > 0}
          onClick={brandClick}
          deleteChoice={brandDeleteChoice}
        >
          편의점 {filter.brand.length > 0 && filter.brand.length}
        </Choice>
        <Choice
          isChoosed={filter.category.length > 0}
          onClick={categoryClick}
          deleteChoice={categoryDeleteChoice}
        >
          카테고리 {filter.category.length > 0 && filter.category.length}
        </Choice>
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

      <FilterPopup
        open={filterOpen}
        setOpen={setFilterOpen}
        setFilter={setFilter}
        filter={filter}
      />
    </Layout>
  );
};

export default View;
