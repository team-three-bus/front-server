import React from 'react';

import * as S from './Search.styles';

import { Title } from 'Common/Title';
import { TextBtn } from 'Common/TextBtn';
import { Mark, MarkBox } from 'Common/Mark';
import { Feature, FeatureBox } from 'Common/Feature';

const View = () => {
  return (
    <>
      <Title title={`최근 검색어`} right={<TextBtn>모두 지우기</TextBtn>} />
      <MarkBox>
        <Mark>삼각김밥</Mark>
        <Mark>유제품/커피</Mark>
        <Mark>음료수</Mark>
        <Mark>슈퍼콘 민트 초크 아이스크림</Mark>
        <Mark>GS25</Mark>
        <Mark>천하장사 소세지</Mark>
      </MarkBox>
      <Title title={`이런 검색어는 어떠세요?`} />
      <FeatureBox>
        <Feature>숙취해소</Feature>
        <Feature>커피</Feature>
        <Feature>즉석조리식품</Feature>
        <Feature>샐러드</Feature>
        <Feature>붉닭볶음면</Feature>
        <Feature>탄산수</Feature>
      </FeatureBox>
    </>
  );
};

export default View;
