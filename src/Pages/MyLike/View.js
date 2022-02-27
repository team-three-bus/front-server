import React from 'react';

import * as S from './MyLike.styles';

import { Layout } from 'Common/Layout';
import { Title } from 'Common/Title';
import { Choice } from 'Common/Choice';
import { Checkbox } from 'Common/Form';
import { Product } from 'Common/Product';
import tempProductImg from 'Common/Product/img/tempProductImg.jpg';
import { ItemList, Item } from 'Common/ItemList';
import { FilterPopup } from './FilterPopup';
import { Empty } from 'Common/Empty';
import { Btn, BtnArea } from 'Common/Btn';

import { DATA_FORWARD, DATA_REVERSE } from 'API_DATA';

const View = ({
  isInit,
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
  changeLike,
  gotoDetail,
  products,
  isLogin,
  gotoLogin,
}) => {
  return (
    <Layout header='sub' title='완내스' bottomnav={true}>
      <Title
        sort='main'
        icon='like'
        title='완전 내 스타일!'
        subTitle='찜한 상품을 모아서 볼 수 있어요.'
      />
      <S.FilterBox>
        <Choice
          isChoosed={filter.category.length > 0}
          onClick={categoryClick}
          deleteChoice={categoryDeleteChoice}
          disabled={!isLogin}
        >
          카테고리 {filter.category.length > 0 && filter.category.length}
        </Choice>
        <Choice
          isChoosed={filter.brand.length > 0}
          onClick={brandClick}
          deleteChoice={brandDeleteChoice}
          disabled={!isLogin}
        >
          편의점 {filter.brand.length > 0 && filter.brand.length}
        </Choice>
      </S.FilterBox>

      {isLogin ? (
        <>
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
          {products.length > 0 && (
            <ItemList>
              {products
                .filter((products) => {
                  if (!isEvent) return true;
                  return products.isEvent === true;
                })
                .map((product, i) => {
                  return (
                    <Item key={i}>
                      <Product
                        id={product.id}
                        img={product.imageUrl}
                        title={product.name}
                        store={DATA_REVERSE.brand[product.brand]}
                        plus={DATA_REVERSE.event[product.lastEventType]}
                        price={product.price}
                        like={product.isLike}
                        changeLike={changeLike}
                        gotoDetail={gotoDetail}
                        saleend={!product.isEvent}
                      />
                    </Item>
                  );
                })}
            </ItemList>
          )}

          {isInit && !products.length > 0 && (
            <S.EmptyBox>
              <Empty text={`마음에 드는 상품을 찜해보세요!`} full={false} />
            </S.EmptyBox>
          )}
          <FilterPopup
            open={filterOpen}
            setOpen={setFilterOpen}
            setFilter={setFilter}
            filter={filter}
          />
        </>
      ) : (
        <S.EmptyBox cta={true}>
          <Empty
            iconType={'question'}
            height={'100%'}
            text={
              <>
                가입/로그인 하시면 상품을 찜할 수 있어요! <br />
                로그인하러 가시겠어요?
              </>
            }
          />
          <BtnArea sidespacing={true}>
            <Btn onClick={gotoLogin}>가입/로그인하기</Btn>
          </BtnArea>
        </S.EmptyBox>
      )}
    </Layout>
  );
};

export default View;
