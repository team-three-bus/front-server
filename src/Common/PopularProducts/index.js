import React from 'react';
import styled from "styled-components";
import { Title } from 'Common/Title';
import { Product } from 'Common/Product';
import { ItemList, Item } from 'Common/ItemList';
import { Pick } from 'Common/Pick';
import tempProductImg from 'Common/Product/img/tempProductImg.jpg';
import { CATEGORY_LIST } from 'Common/Util/Constant';
import { Btn } from 'Common/Btn';

const PopularProductBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-top: 8px;
  padding: 7px 0 121px;
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

const index = () => {
  const data = [1, 2, 3, 4, 5]; // TODO: 실제 데이터 연동, 처음 6개, 더보기 시 6개씩 추가, 최대 30개
  return (
    <PopularProductBox>
      <Title
        sort="main"
        icon="popular"
        subTitle="다른 편족님에게 사랑받는 상품을 모았어요!"
        title="추천상품"
      />
      <PickList>
        {
          CATEGORY_LIST.map((category, i) => (
            <Pick activeColor="g" key={i}>{category.name}</Pick>    
          ))
        }
      </PickList>
      <ItemList>
        {data.map((item, i) => (
          <Item key={i}>
            <Product
              img={tempProductImg}
              title={`서울) 비요뜨`}
              store={`emart24`}
              plus={`oneone`}
              price={1500}
            />
          </Item>
        ))}
      </ItemList>
      <Btn option="add">더 많은 행사상품 보기</Btn>
    </PopularProductBox>
  );
}

export default index;