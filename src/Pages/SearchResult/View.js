import React from 'react';

import * as S from './SearchResult.styles';

import { Layout } from 'Common/Layout';
import * as Condition from 'Common/Condition';
import { Title } from 'Common/Title';
import { Product } from 'Common/Product';
import tempProductImg from 'Common/Product/img/tempProductImg.jpg';
import { ItemList, Item } from 'Common/ItemList';

const View = ({ searchValue, onSearchChange, onSearch }) => {
  return (
    <Layout
      searchValue={searchValue}
      onSearchChange={onSearchChange}
      onSearch={onSearch}
    >
      <Condition.Container>
        <Condition.Box
          title='편의점'
          condition={{
            cu: { name: 'CU', key: 'cu', selected: false },
            gs25: { name: 'GS25', key: 'gs25', selected: false },
            seven11: { name: '세븐일레븐', key: 'seven11', selected: false },
            emart24: { name: 'Emart 24', key: 'emart24', selected: false },
          }}
        />
        <Condition.Box
          title='카테고리'
          condition={{
            0: {
              key: 0,
              name: '간편식사',
              selected: true,
            },
            1: {
              key: 1,
              name: '빵/과자류',
              selected: false,
            },
            2: {
              key: 2,
              name: '생수/과채/기타음료',
              selected: false,
            },
            3: {
              key: 3,
              name: '생활용품',
              selected: false,
            },
            4: {
              key: 4,
              name: '아이스크림',
              selected: false,
            },
            5: {
              key: 5,
              name: '유제품/커피 음료',
              selected: false,
            },
            6: {
              key: 6,
              name: '탄산음료',
              selected: false,
            },
            7: {
              key: 7,
              name: '기타',
              selected: false,
            },
          }}
        />
        <Condition.Box
          title='할인'
          condition={{
            oneone: {
              key: 'oneone',
              name: '1+1',
              selected: true,
            },
            onetwo: {
              key: 'onetwo',
              name: '2+1',
              selected: false,
            },
          }}
        />
      </Condition.Container>
      <Title
        right={null}
        sort='result'
        title={
          <>
            <strong>총 23</strong>개의 상품이 있습니다
          </>
        }
      />
      {
        <ItemList>
          <Item>
            <Product
              img={tempProductImg}
              title={`서울) 비요뜨`}
              store={`emart24`}
              plus={`oneone`}
              price={1500}
              isEvent={true}
            />
          </Item>
          <Item>
            <Product
              img={tempProductImg}
              title={`서울) 비요뜨`}
              store={`emart24`}
              plus={`oneone`}
              price={1500}
              isEvent={true}
            />
          </Item>
          <Item>
            <Product
              img={tempProductImg}
              title={`서울) 비요뜨`}
              store={`emart24`}
              plus={`oneone`}
              price={1500}
              isEvent={true}
            />
          </Item>
          <Item>
            <Product
              img={tempProductImg}
              title={`서울) 비요뜨`}
              store={`emart24`}
              plus={`oneone`}
              price={1500}
              isEvent={true}
            />
          </Item>
          <Item>
            <Product
              img={tempProductImg}
              title={`서울) 비요뜨`}
              store={`emart24`}
              plus={`oneone`}
              price={1500}
              isEvent={true}
            />
          </Item>
        </ItemList>
      }
    </Layout>
  );
};

export default View;
