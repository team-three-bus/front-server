import React from 'react';

import * as S from './Search.styles';

import { Layout } from 'Common/Layout';
import { Title } from 'Common/Title';
import { TextBtn } from 'Common/TextBtn';
import { Mark, MarkBox } from 'Common/Mark';
import { Feature, FeatureBox } from 'Common/Feature';
import { Empty } from 'Common/Empty';

const View = ({
  searchValue,
  onSearchChange,
  searchList,
  setSearchList,
  onSearch,
}) => {
  return (
    <Layout
      searchValue={searchValue}
      onSearchChange={onSearchChange}
      onSearch={onSearch}
    >
      <Title
        title={`최근 검색어`}
        right={
          searchList.length > 0 && (
            <TextBtn
              onClick={() => {
                setSearchList([]);
              }}
            >
              모두 지우기
            </TextBtn>
          )
        }
      />
      {searchList.length ? (
        <MarkBox
          list={searchList}
          onChange={(searchList) => {
            setSearchList(searchList);
          }}
        />
      ) : (
        <Empty />
      )}

      <Title title={`이런 검색어는 어떠세요?`} />
      <FeatureBox>
        <Feature>숙취해소</Feature>
        <Feature>커피</Feature>
        <Feature>즉석조리식품</Feature>
        <Feature>샐러드</Feature>
        <Feature>붉닭볶음면</Feature>
        <Feature>탄산수</Feature>
      </FeatureBox>
    </Layout>
  );
};

export default View;
