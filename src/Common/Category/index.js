import React from 'react';
import styled from 'styled-components';
import { CATEGORY_LIST } from '../Util/Constant';

const CategoryBox = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(4, 20%);
  gap: 7%;
  height: calc(229 / 384 * 100vw);
  margin: 8px auto 0;
  padding: 22px 20px;
  background: #FFFFFF;
`

const CategoryItem = styled.div`
`

const CategoryItemImg = styled.img`
  box-sizing: border-box;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  background: url(${props => props.img}) no-repeat center/cover;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
  border: 1px solid #EEEEEE;
  border-radius: calc(24 / 384 * 100vw);
`

const CategoryItemName = styled.p`
  margin: 0;
  font-size: 12px;
  text-align: center;
  font-weight: bold;
  color: #212529;
  white-space: nowrap;
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