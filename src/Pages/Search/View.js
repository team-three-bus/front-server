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
  gotoSearchResult,
  feature = [],
}) => {
  return (
    <Layout
      header='search'
      bottomnav={true}
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
          onClick={gotoSearchResult}
          onChange={(searchList) => {
            setSearchList(searchList);
          }}
        />
      ) : (
        <Empty />
      )}

      <Title title={`이런 특성을 가진 상품은 어떠세요?`} />
      <FeatureBox>
        {feature.map((item, index) => {
          return (
            <Feature
              key={index}
              onClick={() => {
                gotoSearchResult(item);
              }}
            >
              {item}
            </Feature>
          );
        })}
      </FeatureBox>
    </Layout>
  );
};

export default View;
