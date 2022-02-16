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
import { FilterPopup } from './FilterPopup';
import { Pick } from 'Common/Pick';
import { Btn, BtnArea } from 'Common/Btn';
import { Empty } from 'Common/Empty';

import { DATA_FORWARD, DATA_REVERSE } from 'API_DATA';

const View = ({
  condition,
  changeCategory,
  brand,
  setBrand,
  changeBrand,
  filterOpen,
  setFilterOpen,
  filter,
  setFilter,
  orderClick,
  filterClick,
  products,
  productCnt,
  currentPage,
  getMoreProducts,
  changeLike,
  gotoDetail,
}) => {
  return (
    <Layout header='sub' title='카테고리' bottomnav={true}>
      <Condition condition={condition} setCondition={changeCategory} />
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
              총 <H.PrimaryColor>{productCnt}</H.PrimaryColor>개
            </strong>
            의 상품이 있습니다
          </>
        }
      />
      {
        <ItemList>
          {products.map((product, i) => {
            return (
              <Item key={i}>
                <Product
                  id={product.id}
                  img={product.imageUrl}
                  title={product.name}
                  store={DATA_REVERSE.brand[product.brand]}
                  plus={DATA_REVERSE.event[product.eventType]}
                  price={product.price}
                  like={product.isLike}
                  gotoDetail={gotoDetail}
                  changeLike={changeLike}
                />
              </Item>
            );
          })}
        </ItemList>
      }
      {!products.length > 0 && <Empty text={`조건에 맞는 상품이 없습니다.`} />}
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
