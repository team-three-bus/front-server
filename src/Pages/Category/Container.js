import React from 'react';
import qs from 'query-string';

import View from './View';

import { DATA_FORWARD } from 'API_DATA';

const getQueryString = (condition) => {
  const querystring = qs.stringify(condition, { arrayFormat: 'comma' });
  return querystring;
};

const Container = () => {
  const [condition, setCondition] = React.useState([
    { id: 'all', name: '전체', selected: true },
    { id: 'meal', name: '간편식사', selected: false },
    { id: 'bread', name: '빵/과자류', selected: false },
    { id: 'drink', name: '생수/과채/기타음료', selected: false },
    { id: 'supplies', name: '생활용품', selected: false },
    { id: 'icecream', name: '아이스크림', selected: false },
    { id: 'milkcoffe', name: '유제품/커피 음료', selected: false },
    { id: 'soda', name: '탄산음료', selected: false },
    { id: 'etc', name: '기타', selected: false },
  ]);

  const changeCategory = (condtion) => {
    setCondition(condtion);
    setCurrentPage(1);
  };

  const [brand, setBrand] = React.useState([
    { id: 'gs', name: 'GS', selected: false },
    { id: 'cu', name: 'CU', selected: false },
    { id: 'emart24', name: 'emart24', selected: false },
    { id: 'seven11', name: '7-ELEVEN', selected: false },
  ]);

  const changeBrand = (id) => {
    setBrand((brand) => {
      return brand.map((b) => {
        if (b.id == id) return { ...b, selected: !b.selected };
        return { ...b };
      });
    });
    setCurrentPage(1);
  };

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
    setCurrentPage(1);
  }, []);

  const [products, setProducts] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(1);
  const [productCnt, setProductCnt] = React.useState(0);

  React.useEffect(() => {
    const _condition = {};

    _condition.page = currentPage;
    _condition.brand = brand
      .filter((item) => item.selected)
      .map((item) => {
        return DATA_FORWARD.brand[item.id];
      });

    _condition.category = condition
      .filter((item) => item.selected)
      .map((item) => DATA_FORWARD.category[item.id]);

    Object.entries(filter).forEach(([key, item]) => {
      switch (key) {
        case 'event':
          _condition[key] = DATA_FORWARD[key][item];
          break;
        default:
          _condition[key] = item;
          break;
      }
    });

    fetch(
      `http://133.186.208.125:3000/products/category?${getQueryString(
        _condition
      )}`,
      {
        method: 'GET',
      }
    )
      .then((res) => res.json())
      .then(({ list, currentPage, pageSize, productCnt }) => {
        currentPage = Number(currentPage);
        setProducts((prodtucts) => {
          if (currentPage == 1) return list;
          return [...prodtucts, ...list];
        });
        setCurrentPage(currentPage);
        setProductCnt(productCnt);
        setPageSize(pageSize);
      });
  }, [brand, condition, filter, currentPage]);

  const getMoreProducts = React.useCallback(() => {
    setCurrentPage((currentPage) => currentPage + 1);
  }, []);

  return (
    <View
      condition={condition}
      changeCategory={changeCategory}
      brand={brand}
      setBrand={setBrand}
      changeBrand={changeBrand}
      filterOpen={filterOpen}
      setFilterOpen={setFilterOpen}
      filter={filter}
      setFilter={customSetFilter}
      orderClick={orderClick}
      filterClick={filterClick}
      products={products}
      pageSize={pageSize}
      productCnt={productCnt}
      currentPage={currentPage}
      getMoreProducts={getMoreProducts}
    />
  );
};

export default Container;
