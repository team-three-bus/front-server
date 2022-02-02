import React from 'react';

import View from './View';

const Container = () => {
  const [condition, setCondition] = React.useState({
    0: { key: 0, name: '전체', selected: true },
    1: { key: 1, name: '간편식사', selected: false },
    2: { key: 2, name: '빵/과자류', selected: false },
    3: { key: 3, name: '생수/과채/기타음료', selected: false },
    4: { key: 4, name: '생활용품', selected: false },
    5: { key: 5, name: '아이스크림', selected: false },
    6: { key: 6, name: '유제품/커피 음료', selected: false },
    7: { key: 7, name: '탄산음료', selected: false },
    8: { key: 8, name: '기타', selected: false },
  });

  const [brand, setBrand] = React.useState([
    { id: 'gs', name: 'GS', selected: false },
    { id: 'cu', name: 'CU', selected: false },
    { id: 'emart24', name: 'emart24', selected: false },
    { id: 'seven11', name: '7-ELEVEN', selected: false },
  ]);

  const changeBrand = React.useCallback((id) => {
    setBrand((brand) => {
      return brand.map((b) => {
        if (b.id == id) return { ...b, selected: !b.selected };
        return b;
      });
    });
  }, []);

  const [filterOpen, setFilterOpen] = React.useState(false);
  const [filter, setFilter] = React.useState({
    order: ['lowPrice'],
    event: [],
  });
  const orderClick = React.useCallback(() => {
    setFilterOpen(true);
  }, []);
  const filterClick = React.useCallback(() => {
    setFilterOpen(true);
  }, []);

  const customSetFilter = React.useCallback((filter) => {
    setFilter(filter);
  }, []);

  return (
    <View
      condition={condition}
      setCondition={setCondition}
      brand={brand}
      setBrand={setBrand}
      changeBrand={changeBrand}
      filterOpen={filterOpen}
      setFilterOpen={setFilterOpen}
      filter={filter}
      setFilter={customSetFilter}
      orderClick={orderClick}
      filterClick={filterClick}
    />
  );
};

export default Container;
