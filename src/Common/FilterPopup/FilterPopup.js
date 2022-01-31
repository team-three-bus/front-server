import React from 'react';

import * as S from './FilterPopup.styles';

import { BottomSheet } from 'Common/BottomSheet';
import { Pick, PickList } from 'Common/Pick';
import { Btn } from 'Common/Btn';
import { IconTextBtn } from 'Common/IconTextBtn';

const FilterPopup = ({ open }) => {
  return (
    <BottomSheet open={open}>
      <S.Container>
        <S.Content>
          <PickList title='정렬'>
            <Pick>낮은 가격순</Pick>
            <Pick>높은 가격순</Pick>
            <Pick>인기순</Pick>
            <Pick>클릭순</Pick>
          </PickList>
          <PickList title='카테고리'>
            <Pick>간편식사</Pick>
            <Pick>빵/과자류</Pick>
            <Pick>아이스크립</Pick>
            <Pick>생활용품</Pick>
            <Pick>유제품/커피음료</Pick>
            <Pick>탄산음료</Pick>
            <Pick>생수/과채/기타음료</Pick>
            <Pick>기타</Pick>
          </PickList>
          <PickList title='편의점'>
            <Pick>GS25</Pick>
            <Pick>CU</Pick>
            <Pick>7-ELEVEN</Pick>
            <Pick>emart24</Pick>
          </PickList>
          <PickList title='할인'>
            <Pick>1+1</Pick>
            <Pick>2+1</Pick>
          </PickList>
        </S.Content>
        <S.Footer>
          <IconTextBtn icon='reset'>선택 초기화</IconTextBtn>
          <Btn>선택 적용하기</Btn>
        </S.Footer>
      </S.Container>
    </BottomSheet>
  );
};

export default FilterPopup;
