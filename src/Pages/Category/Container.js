import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import qs from 'query-string';

import View from './View';

import { DATA_FORWARD, DATA_REVERSE } from 'API_DATA';

const getQueryString = (condition) => {
  const querystring = qs.stringify(condition, { arrayFormat: 'comma' });
  return querystring;
};

const Container = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isInit, setIsInit] = React.useState(true);
  const loading = React.useRef(false);

  let {
    category: locationCategory,
    brand: locationBrand,
    order: locationOrder,
    event: locationEvent,
    currentPage: locationPage,
  } = qs.parse(location.search.slice(1), { arrayFormat: 'comma' });

  if (locationBrand && !Array.isArray(locationBrand))
    locationBrand = [locationBrand];
  if (!locationBrand) locationBrand = [];

  if (locationEvent && !Array.isArray(locationEvent)) {
    locationEvent = [DATA_REVERSE.event[locationEvent]];
  } else if (Array.isArray(locationEvent)) {
    locationEvent = locationEvent.map((item) => {
      return DATA_REVERSE.event[item];
    });
  }
  if (!locationEvent) locationEvent = [];

  if (locationCategory && !Array.isArray(locationCategory)) {
    locationCategory = [locationCategory];
  } else if (!locationCategory) locationCategory = ['전체'];

  if (locationOrder && !Array.isArray(locationOrder)) {
    locationOrder = [locationOrder];
  }
  if (!locationOrder) locationOrder = ['lowPrice'];

  const [condition, setCondition] = React.useState([
    {
      id: 'all',
      name: '전체',
      selected: locationCategory.indexOf(DATA_FORWARD.category['all']) > -1,
    },
    {
      id: 'meal',
      name: '간편식사',
      selected: locationCategory.indexOf(DATA_FORWARD.category['meal']) > -1,
    },
    {
      id: 'bread',
      name: '빵/과자류',
      selected: locationCategory.indexOf(DATA_FORWARD.category['bread']) > -1,
    },
    {
      id: 'drink',
      name: '생수/과채/기타음료',
      selected: locationCategory.indexOf(DATA_FORWARD.category['drink']) > -1,
    },
    {
      id: 'supplies',
      name: '생활용품',
      selected:
        locationCategory.indexOf(DATA_FORWARD.category['supplies']) > -1,
    },
    {
      id: 'icecream',
      name: '아이스크림',
      selected:
        locationCategory.indexOf(DATA_FORWARD.category['icecream']) > -1,
    },
    {
      id: 'milkcoffe',
      name: '유제품/커피 음료',
      selected:
        locationCategory.indexOf(DATA_FORWARD.category['milkcoffee']) > -1,
    },
    {
      id: 'soda',
      name: '탄산음료',
      selected: locationCategory.indexOf(DATA_FORWARD.category['soda']) > -1,
    },
    {
      id: 'etc',
      name: '기타',
      selected: locationCategory.indexOf(DATA_FORWARD.category['etc']) > -1,
    },
  ]);

  const changeCategory = (condtion) => {
    setCondition(condtion);
    setCurrentPage(1);
  };

  const [brand, setBrand] = React.useState([
    {
      id: 'gs',
      name: 'GS',
      selected: locationBrand.indexOf(DATA_FORWARD.brand['gs']) > -1,
    },
    {
      id: 'cu',
      name: 'CU',
      selected: locationBrand.indexOf(DATA_FORWARD.brand['cu']) > -1,
    },
    {
      id: 'emart24',
      name: 'emart24',
      selected: locationBrand.indexOf(DATA_FORWARD.brand['emart24']) > -1,
    },
    {
      id: 'seven11',
      name: '7-ELEVEN',
      selected: locationBrand.indexOf(DATA_FORWARD.brand['seven11']) > -1,
    },
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
    order: locationOrder,
    event: locationEvent,
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
  const [currentPage, setCurrentPage] = React.useState(
    Number(locationPage) || 1
  );
  const [productCnt, setProductCnt] = React.useState(0);

  React.useEffect(() => {
    loading.current = true;
    const _condition = {};

    _condition.currentPage = currentPage;
    _condition.brand = brand
      .filter((item) => item.selected)
      .map((item) => {
        return DATA_FORWARD.brand[item.id];
      });

    _condition.category = condition
      .filter((item) => item.selected)
      .map((item) => DATA_FORWARD.category[item.id]);
    if (_condition.category[0] == '전체') {
      _condition.category = [];
    }

    Object.entries(filter).forEach(([key, item]) => {
      switch (key) {
        case 'event':
          _condition[key] = DATA_FORWARD.event[item];
          break;
        default:
          _condition[key] = item;
          break;
      }
    });

    const querystring = qs.stringify(_condition, { arrayFormat: 'comma' });
    navigate(`?${querystring}`, { replace: true });

    const token = localStorage.getItem('access_token');
    const option = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    if (token) {
      option.headers.authorization = `${token}`;
    }

    if (isInit) {
      _condition.pageSize = currentPage;
      _condition.currentPage = 1;

      fetch(
        `http://133.186.208.125:3000/products/category?${getQueryString(
          _condition
        )}`,
        option
      )
        .then((res) => res.json())
        .then(({ list, currentPage, productCnt }) => {
          currentPage = Number(currentPage);
          setProducts(list);
          setProductCnt(productCnt);
          loading.current = false;

          setIsInit(false);

          const scrollY = localStorage.getItem('categoryScroll');
          window.scrollTo(0, scrollY);
        });
      return;
    }

    fetch(
      `http://133.186.208.125:3000/products/category?${getQueryString(
        _condition
      )}`,
      option
    )
      .then((res) => res.json())
      .then(({ list, currentPage, productCnt }) => {
        currentPage = Number(currentPage);
        setProducts((prodtucts) => {
          if (currentPage == 1) return list;
          return [...prodtucts, ...list];
        });
        setProductCnt(productCnt);
        loading.current = false;
      });
  }, [brand, condition, filter, currentPage]);

  const getMoreProducts = React.useCallback(() => {
    setCurrentPage((currentPage) => currentPage + 1);
  }, []);

  const infiniteScroll = (e) => {
    const $scrollingElement = e.target.scrollingElement;
    const windowHeight = window.innerHeight;

    const isBottom =
      Math.ceil($scrollingElement.scrollHeight) <=
      Math.ceil($scrollingElement.scrollTop + windowHeight);

    if (
      isBottom &&
      !loading.current &&
      Math.ceil(productCnt / 10) > currentPage
    ) {
      loading.current = true;
      setCurrentPage((currentPage) => {
        return currentPage + 1;
      });
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', infiniteScroll, true);

    return () => {
      window.removeEventListener('scroll', infiniteScroll, true);
    };
  }, [productCnt, currentPage]);

  const saveScroll = () => {
    const scrollY = window.scrollY;
    localStorage.setItem('categoryScroll', scrollY);
  };
  React.useEffect(() => {
    window.addEventListener('scroll', saveScroll, true);

    return () => {
      window.removeEventListener('scroll', saveScroll, true);
    };
  }, []);

  const changeLike = ({ id, isLike }) => {
    const token = localStorage.getItem('access_token');

    if (!token) {
      navigate({
        pathname: '/login',
      });
    } else if (isLike === false || isLike === undefined) {
      fetch('http://133.186.208.125:3000/products/like', {
        method: 'POST',
        headers: {
          authorization: token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: id,
        }),
      }).then((res) => {
        setProducts((prevProducts) => {
          return prevProducts.map((item) => {
            if (item.id === id) return { ...item, isLike: true };
            return { ...item };
          });
        });
      });
    } else if (isLike === true) {
      fetch('http://133.186.208.125:3000/products/like', {
        method: 'DELETE',
        headers: {
          authorization: token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: id,
        }),
      }).then((res) => {
        setProducts((prevProducts) => {
          return prevProducts.map((item) => {
            if (item.id === id) return { ...item, isLike: false };
            return { ...item };
          });
        });
      });
    }
  };

  const gotoDetail = (id) => {
    return (window.location.href = `/detail/${id}`);
  };

  return (
    <View
      isInit={isInit}
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
      productCnt={productCnt}
      currentPage={currentPage}
      getMoreProducts={getMoreProducts}
      changeLike={changeLike}
      gotoDetail={gotoDetail}
    />
  );
};

export default Container;
