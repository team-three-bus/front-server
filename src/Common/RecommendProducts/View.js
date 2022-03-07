import React from 'react';
import styled from "styled-components";
import { Title } from 'Common/Title';
import { Product } from 'Common/Product';
import tempProductImg from 'Common/Product/img/tempProductImg.jpg';

const RecommendProductBox = styled.div`
  box-sizing: border-box;
  margin-top: 10px;
  padding: 7px 0 3px;
  background: #ffffff;
`

const RecommendItemList = styled.div`
  display: flex;
  overflow-x: auto;
  margin: 21px 0 8px;
  padding: 0 20px;
  > div {
    min-width: 135px;
  }
  > div + div {
    margin-left: 16px
  }
  &::-webkit-scrollbar {
    visibility: hidden;
  }
  &::-webkit-scrollbar-thumb {
    background: transparent;
  }
`

const View = ({
  recommendItems,
  nickname
}) => {
  return (
    <RecommendProductBox>
      <Title
        sort="main"
        icon="recommend"
        subTitle={
          nickname ? 
            `${nickname}님을 위해 편하가 준비한 추천 상품!` : 
            "가입/로그인 하시면 더 정확한 추천을 받으실 수 있어요!"
        }
        title="추천상품"
      />
      <RecommendItemList>
        {recommendItems.map((item, i) => (
          <Product
            key={i}
            id={item.id}
            img={item.imageurl}
            price={item.price}
            plus={item.eventtype}
            title={item.name}
            store={item.brand}
            saleend={!item.isevent}
            // like={}
          />
        ))}
      </RecommendItemList>
    </RecommendProductBox>
  );
}

export default View;