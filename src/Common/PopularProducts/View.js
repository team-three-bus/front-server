import React from 'react';
import styled from "styled-components";
import { Title } from 'Common/Title';
import { Product } from 'Common/Product';
import { ItemList, Item } from 'Common/ItemList';
import { Pick } from 'Common/Pick';
import { CATEGORY_LIST } from 'Common/Util/Constant';
import { Btn } from 'Common/Btn';

const PopularProductBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-top: 8px;
  padding: 7px 0 41px;
  background: #ffffff;
`

const PickList = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
  margin: 20px 0 16px;
  padding: 0 20px;
  overflow-x: auto;
  white-space: nowrap;
  &::-webkit-scrollbar {
    visibility: hidden;
  }
  &::-webkit-scrollbar-thumb {
    background: transparent;
  }
`;

const Placeholder = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 17px;
  color: #9f9f9f;
`

const View = ({ 
  maxPopularItemsPageNum,
  popularItems,
  popularItemsPageNum,
  popularCategory,
  onClickMoreBtn,
  onClickCategory,
  changeLike,
  gotoDetail
}) => {
  const isShowMoreBtn = popularItems.length > 0 && popularItemsPageNum < maxPopularItemsPageNum;
  return (
    <PopularProductBox>
      <Title
        sort="main"
        icon="popular"
        subTitle="다른 편족님에게 사랑받는 상품을 모았어요!"
        title="인기상품"
      />
      <PickList>
        <Pick 
          on={!popularCategory ? true : false}
          onClick={() => onClickCategory(null)}
        >
          전체보기
        </Pick>
        {CATEGORY_LIST.map((category, i) => (
          <Pick 
            key={i}
            on={popularCategory === category ? true : false}
            onClick={() => onClickCategory(category)}
          >
            {category}
          </Pick>
        ))}
      </PickList>
      <ItemList>
        {popularItems.length > 0 ?
          popularItems.map(({ imageUrl, name, brand, eventType, price, isLike, id, isEvent }, i) => (
            <Item key={i}>
              <Product
                id={id}
                img={imageUrl}
                title={name}
                store={brand}
                plus={eventType}
                price={price}
                like={isLike}
                saleend={!isEvent}
                changeLike={changeLike}
                gotoDetail={() => gotoDetail(id)}
              />
            </Item>
          )) : 
          <Placeholder>추천 상품이 없습니다.</Placeholder>
        }
      </ItemList>
      {isShowMoreBtn && (
        <Btn 
          option="add"
          onClick={onClickMoreBtn}
        >
          더 많은 행사상품 보기
        </Btn>
      )}
    </PopularProductBox>
  );
}

export default View;