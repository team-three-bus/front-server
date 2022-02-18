import React from 'react';

import * as S from './SearchResult.styles';
import * as H from 'Common/Helper';

import { Layout } from 'Common/Layout';
import { Decide, DecideList } from 'Common/Decide';
import { Choice } from 'Common/Choice';
import { Title } from 'Common/Title';
import { Product } from 'Common/Product';
import { ItemList, Item } from 'Common/ItemList';
import { Empty } from 'Common/Empty';
import { FilterPopup } from './FilterPopup';

import { DATA_FORWARD, DATA_REVERSE } from 'API_DATA';

const View = ({
  isInit,
  searchValue,
  onSearchChange,
  onSearch,
  brand,
  event,
  filterBrand,
  filterEvent,
  changeBrand,
  changeEvent,
  filter,
  setFilter,
  filterOpen,
  setFilterOpen,
  sortClick,
  categoryClick,
  categoryDeleteChoice,
  products,
  productCnt,
  changeLike,
  gotoDetail,
}) => {
  return (
    <Layout
      header='search'
      bottomnav={true}
      line={true}
      searchValue={searchValue}
      onSearchChange={onSearchChange}
      onSearch={onSearch}
    >
      <DecideList line='bottom'>
        {brand.map((item, i) => {
          return (
            <Decide
              key={i}
              on={filterBrand.indexOf(item.id) > -1}
              onClick={() => {
                changeBrand(item.id);
              }}
            >
              {item.name}
            </Decide>
          );
        })}
      </DecideList>
      <S.DecideChoice>
        <DecideList>
          {event.map((item, i) => {
            return (
              <Decide
                key={i}
                on={filterEvent.indexOf(item.id) > -1}
                onClick={() => {
                  changeEvent(item.id);
                }}
              >
                {item.name}
              </Decide>
            );
          })}
        </DecideList>
        <Choice
          size='lg'
          isChoosed={filter.category.length > 0}
          onClick={categoryClick}
          deleteChoice={categoryDeleteChoice}
        >
          카테고리 {filter.category.length > 0 && filter.category.length}
        </Choice>
      </S.DecideChoice>
      <Title
        right={
          <Choice isChoosed={false} onClick={sortClick}>
            {filter.sort[0] === 'firstattr'
              ? '연관순'
              : filter.sort[0] === 'priceAsc'
              ? '낮은 가격순'
              : filter.sort[0] === 'priceDesc'
              ? '높은 가격순'
              : filter.sort[0] === 'likecnt'
              ? '인기순'
              : null}
          </Choice>
        }
        sort='result'
        title={
          <>
            <strong>
              총 <H.PrimaryColor>{productCnt || 0}</H.PrimaryColor>개
            </strong>
            의 상품이 있습니다
          </>
        }
      />

      <ItemList>
        {products.map((product, i) => {
          return (
            <Item key={i}>
              <Product
                id={product.id}
                img={product.imageurl}
                title={product.name}
                store={DATA_REVERSE.brand[product.brand]}
                plus={DATA_REVERSE.event[product.eventtype]}
                price={product.price}
                like={product.isLike}
                gotoDetail={gotoDetail}
                changeLike={changeLike}
              />
            </Item>
          );
        })}
      </ItemList>
      <FilterPopup
        open={filterOpen}
        setOpen={setFilterOpen}
        setFilter={setFilter}
        filter={filter}
      />

      {!isInit && !products.length > 0 && (
        <Empty text={`조건에 맞는 상품이 없습니다.`} />
      )}
    </Layout>
  );
};

export default View;
