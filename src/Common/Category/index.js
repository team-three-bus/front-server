import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CATEGORY_LIST } from './Constant';

const CategoryBox = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 17px 30px;
  padding: 22px 20px 24px 20px;
  background: #ffffff;
`;

const CategoryItem = styled(Link)`
  position: relative;
  display: inline-block;
  text-align: center;
  text-decoration: none;
`;

const CategoryItemImgWrap = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 24px;
  overflow: hidden;
`;

const CategoryItemImg = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  box-sizing: border-box;
  display: block;
  min-width: 64px;
  min-height: 64px;
  transform: translate(-50%, -50%);
  background: url(${(props) => props.img}) center center no-repeat;
  background-size: 100%;
`;

const CategoryItemName = styled.p`
  margin: 1px 0 0;
  font-size: 12px;
  line-height: 1.34;
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
