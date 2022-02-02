import React from 'react';
import styled from "styled-components";
import { Title } from 'Common/Title';
import { Product } from 'Common/Product';
import tempProductImg from 'Common/Product/img/tempProductImg.jpg';

const RecommendProductBox = styled.div`
  box-sizing: border-box;
  margin-top: 10px;
  padding-top: 7px;
  width: 100%;
  height: calc(346 / 384 * 100vw);
  background: #ffffff;
`

const RecommendItemList = styled.div`
  display: flex;
  overflow-x: auto;
  margin-top: 21px;
  > div:first-child {
    margin-left: 20px;
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

const index = () => {
  const username = 'test';
  const data = [1, 2, 3]; // TODO: 실제 데이터 가져오기, 최대 10개
  const isLogin = true; // TODO: 로그인 여부 확인
  return (
    <RecommendProductBox>
      <Title
        sort="main"
        icon="recommend"
        subTitle={
          isLogin ? 
            `${username}님을 위해 편하가 준비한 추천 상품!` : 
            "가입/로그인 하시면 더 정확한 추천을 받으실 수 있어요!"
        }
        title="추천상품"
      />
      <RecommendItemList>
        {data.map((item, i) => (
          <Product
            key={i}
            img={tempProductImg}
            price={1500}
            plus="oneone"
            size="sm"
            title="서울) 비요뜨"
            store="emart24"
          />
        ))}
      </RecommendItemList>
    </RecommendProductBox>
  );
}

export default index;