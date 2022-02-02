import React from 'react';

import * as S from './Category.styles';
import * as H from 'Common/Helper';

import { Layout } from 'Common/Layout';
import { Condition } from 'Common/Condition';
import { Decide, DecideList } from 'Common/Decide';
import { Title } from 'Common/Title';
import { Choice } from 'Common/Choice';
import { Product } from 'Common/Product';
import tempProductImg from 'Common/Product/img/tempProductImg.jpg';
import { ItemList, Item } from 'Common/ItemList';
import { FilterPopup } from 'Common/FilterPopup';
import { Pick } from 'Common/Pick';

const View = ({
  condition,
  setCondition,
  brand,
  setBrand,
  changeBrand,
  filterOpen,
  setFilterOpen,
  filter,
  setFilter,
  orderClick,
  filterClick,
}) => {
  return (
    <Layout header='sub' title='카테고리'>
      <Condition condition={condition} setCondition={setCondition} />
      <S.FilterBox>
        <DecideList>
          {brand.map((item, i) => (
            <Decide
              key={i}
              on={item.selected}
              onClick={() => {
                changeBrand(item.id);
              }}
            >
              {item.name}
            </Decide>
          ))}
        </DecideList>
      </S.FilterBox>
      <Title
        right={
          <>
            <Choice onClick={orderClick} isChoosed={false}>
              {filter.order[0] === 'lowPrice'
                ? '낮은 가격순'
                : filter.order[0] === 'highPrice'
                ? '높은 가격순'
                : filter.order[0] === 'popularity'
                ? '인기순'
                : filter.order[0] === 'view'
                ? '조회순'
                : null}
            </Choice>
            <Choice onClick={filterClick} isChoosed='filter'>
              필터
            </Choice>
          </>
        }
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
