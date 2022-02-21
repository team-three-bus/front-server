import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CATEGORY_LIST } from './Constant';

const CategoryBox = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(4, 20%);
  gap: 7%;
  margin: 8px auto 0;
  padding: 22px 20px 44px 20px;
  background: #ffffff;
`;

const CategoryItem = styled(Link)`
  text-decoration: none;
`;

const CategoryItemImgWrap = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 24px;
`;

const CategoryItemImg = styled.img`
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  background: url(${(props) => props.img}) no-repeat center/cover;
  border: 1px solid #eeeeee;
  border-radius: 24px;
`;

const CategoryItemName = styled.p`
  margin: 1px 0 0;
  font-size: 12px;
  text-align: center;
  font-weight: bold;
  color: #212529;
  white-space: nowrap;
`;

const Category = () => {
  const renameCategory = (name) => {
    if (name === '유제품/커피 음료') return '유제품/커피';
    if (name === '생수/과채/기타음료') return '생수/과채';
    return name;
  };
  return (
    <CategoryBox>
      {CATEGORY_LIST.map((item, i) => (
        <CategoryItem key={i} to={item.link}>
          <CategoryItemImgWrap>
            <CategoryItemImg img={item.img} />
          </CategoryItemImgWrap>
          <CategoryItemName>{renameCategory(item.name)}</CategoryItemName>
        </CategoryItem>
      ))}
    </CategoryBox>
  );
};

export default Category;
