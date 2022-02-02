import React from 'react';
import styled from 'styled-components';
import { CATEGORY_LIST } from '../Util/Constant';

const CategoryBox = styled.div`
  box-sizing: border-box;
  flex-wrap: wrap;
  display: flex;
  width: 100%;
  height: calc(229 / 384 * 100vw);
  margin-top: 8px;
  padding: calc(22 / 384 * 100vw) calc(20 / 384 * 100vw) calc(24 / 384 * 100vw) calc(19 / 384 * 100vw);
  background: #FFFFFF;
`

const CategoryItem = styled.div`
  width: calc(64 / 384 * 100vw);
  height: calc(81 / 384 * 100vw);
  margin-right: calc(29 / 384 * 100vw);
  cursor: pointer;
  
  &:nth-child(4n) {
    margin-right: 0;
  }
  &:nth-child(n + 5) {
    margin-top: calc(17 / 384 * 100vw);
  }
`

const CategoryItemImg = styled.img`
  width: calc(64 / 384 * 100vw);
  height: 0;
  padding-bottom: 100%;
  background: url(${props => props.img}) no-repeat center/cover;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
  border: 1px solid #EEEEEE;
  border-radius: calc(24 / 384 * 100vw);
`

const CategoryItemName = styled.p`
  margin: calc(1 / 384 * 100vw) 0;
  font-size: calc(12 / 384 * 100vw);
  text-align: center;
  font-weight: bold;
  color: #212529;
`

const Category = () => {
  return (
    <CategoryBox>
      {CATEGORY_LIST.map((item, i) => (
        <CategoryItem key={i} >
          <CategoryItemImg img={item.img} />
          <CategoryItemName>{item.name}</CategoryItemName>
        </CategoryItem>
      ))}
    </CategoryBox>
  );
}

export default Category;