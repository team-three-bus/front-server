import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import qs from 'query-string';

import { URL } from 'Common/Util/Constant';
import View from './View';

import { DATA_FORWARD, DATA_REVERSE } from 'API_DATA';

const keyword = {
  매운맛: '매운맛',
  단맛: '단맛',
  짠맛: '짠맛',
  다이어트: '다이어트용',
  숙취해소: '숙취해소용',
  '건강기능식품/의약외품': '건강기능식품/의약외품',
  '야식/안주': '야식/안주용',
  여성용품: '여성용품',
  방향제: '방향제',
  에너지: '에너지용 (에너지음료, 에너지바 등)',
  반려동물: '애견용',
  '죽/국': '죽/국(탕, 죽)',
  밥: '밥류 (덮밥, 볶음밥 등)',
  면: '면류 (각종 라면, 국수 등)',
  즉석조리식품: '즉석조리식품(조리 필요한 제품들)',
  '젤리/캔디': '젤리/캔디류',
  '햄/소세지': '햄/소세지',
  '케익/초콜릿': '케익/초콜릿류',
  요거트: '요거트류',
  반찬: '김치/조림 등 반찬류',
  차량용품: '차량용품',
  세면용품: '세면용품(칫솔,치약,샴푸 등)',
  헤어용품: '헤어용품',
};

const getQueryString = (condition) => {
  const querystring = qs.stringify(condition, { arrayFormat: 'comma' });
  return querystring;
};

const Container = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const token = React.useRef(localStorage.getItem('access_token'));
  const [isInit, setIsInit] = React.useState(true);
  const loading = React.useRef(false);

  const mylikeList = React.useRef([]);

  React.useEffect(() => {
    if (!token.current) return;
    fetch(`${URL.API_SERVER}like`, {
      method: 'GET',
      headers: {
        authorization: token.current,
      },
    })
      .then((res) => {
        if (res.status == 200) {
          return res.json();
        }
      })
      .then(({ list }) => {
        const _mylikeList = {};
        list.forEach((item) => {
          _mylikeList[item.id] = item;
        });
        mylikeList.current = _mylikeList;
      });
  }, []);

  let {
    search: locationSearch = '',
    brand: locationBrand,
    eventtype: locationEvent,
    category: locationCategory,
    sort: locationSort,
    currentPage: locationPage,
  } = qs.parse(location.search.slice(1), {
    arrayFormat: 'comma',
  });

  if (locationBrand && !Array.isArray(locationBrand))
    locationBrand = [DATA_REVERSE.brand[locationBrand]];
  else if (Array.isArray(locationBrand)) {
    locationBrand = locationBrand.map((item) => {
      return DATA_REVERSE.brand[item];
    });
  }
  if (!locationBrand) locationBrand = [];

  if (locationEvent && !Array.isArray(locationEvent)) {
    locationEvent = [DATA_REVERSE.event[locationEvent]];
  } else if (Array.isArray(locationEvent)) {
    locationEvent = locationEvent.map((item) => {
      return DATA_REVERSE.event[item];
    });
  }
  if (!locationEvent) locationEvent = [];

  const [searchValue, setSearchValue] = React.useState(locationSearch);
  const onSearch = React.useCallback((value) => {}, []);

  const [filterBrand, setFilterBrand] = React.useState(locationBrand);
  const [filterEvent, setFilterEvent] = React.useState(locationEvent);

  const [brand, setBrand] = React.useState([
    {
      id: 'gs',
      name: 'GS25',
      selected: filterBrand.indexOf(DATA_FORWARD.brand['gs']) > -1,
    },
    {
      id: 'cu',
      name: 'CU',
      selected: filterBrand.indexOf(DATA_FORWARD.brand['cu']) > -1,
    },
    {
      id: 'emart24',
      name: 'emart24',
      selected: filterBrand.indexOf(DATA_FORWARD.brand['emart24']) > -1,
    },
    {
      id: 'seven11',
      name: '7-ELEVEN',
      selected: filterBrand.indexOf(DATA_FORWARD.brand['seven11']) > -1,
    },
  ]);
  const [event, setEvent] = React.useState([
    {
      name: '1+1',
      selected: filterEvent.indexOf(DATA_FORWARD.brand['oneone']) > -1,
      id: 'oneone',
    },
    {
      name: '2+1',
      selected: filterEvent.indexOf(DATA_FORWARD.brand['twoone']) > -1,
      id: 'twoone',
    },
  ]);

  const changeBrand = (brand) => {
    setFilterBrand((prevFilterBrand) => {
      if (prevFilterBrand.indexOf(brand) > -1) {
        return prevFilterBrand.filter((item) => item != brand);
      } else {
        return [...prevFilterBrand, brand];
      }
    });
    setCurrentPage(1);
  };

  const changeEvent = (event) => {
    setFilterEvent((prevFilterEvent) => {
      if (prevFilterEvent.indexOf(event) > -1) {
        return prevFilterEvent.filter((item) => item != event);
      } else {
        return [...prevFilterEvent, event];
      }
    });
    setCurrentPage(1);
  };

  if (locationCategory && !Array.isArray(locationCategory)) {
    locationCategory = [locationCategory];
  } else if (Array.isArray(locationCategory)) {
    locationCategory = locationCategory.map((item) => {
      return DATA_REVERSE.category[item];
    });
  }
  if (!locationCategory) locationCategory = [];

  if (locationSort && !Array.isArray(locationSort)) {
    locationSort = [locationSort];
  }
  if (!locationSort) locationSort = ['firstattr'];

  const [filterOpen, setFilterOpen] = React.useState(false);
  const [filter, setFilter] = React.useState({
    sort: locationSort,
    category: locationCategory,
  });

  const sortClick = React.useCallback(() => {
    setFilterOpen(true);
  }, []);

  const categoryClick = React.useCallback(() => {
    setFilterOpen(true);
  }, []);
  const categoryDeleteChoice = React.useCallback(() => {
    setFilter((filter) => {
      const newfilter = JSON.parse(JSON.stringify(filter));
      newfilter.category = [];
      return newfilter;
    });
    setCurrentPage(1);
  }, []);

  const [products, setProducts] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(
    Number(locationPage) || 1
  );
  const [productCnt, setProductCnt] = React.useState(0);

  const changeLike = React.useCallback(({ id, isLike }) => {
    if (!token.current) {
      navigate({
        pathname: '/login',
      });
      return;
    }

    if (!isLike) {
      fetch(`${URL.API_SERVER}products/like`, {
        method: 'POST',
        headers: {
          authorization: token.current,
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
    } else {
      fetch(`${URL.API_SERVER}products/like`, {
        method: 'DELETE',
        headers: {
          authorization: token.current,
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
  });

  const gotoDetail = React.useCallback((id) => {
    return (window.location.href = `/detail/${id}`);
  });

  React.useEffect(() => {
    loading.current = true;
    const _condition = {};

    _condition.currentPage = currentPage;

    let filteredSearchValue = searchValue;
    const isAttrKeyword = Object.keys(keyword).includes(filteredSearchValue);
    let apiurl = `${URL.API_SERVER}${
      !isAttrKeyword ? 'elastic' : 'elastic/about'
    }`;
    if (isAttrKeyword) {
      filteredSearchValue = keyword[filteredSearchValue];
    }
    _condition.search = filteredSearchValue;
    _condition.brand = filterBrand.map((item) => {
      return DATA_FORWARD.brand[item];
    });
    _condition.eventtype = filterEvent.map((item) => {
      return DATA_FORWARD.event[item];
    });

    _condition.category = filter.category.map((item) => {
      return DATA_FORWARD.category[item];
    });
    _condition.sort = filter.sort.map((item) => {
      return item;
    });

    const querystring = qs.stringify(_condition, { arrayFormat: 'comma' });
    navigate(`?${querystring}`, { replace: true });

    if (isInit) {
      _condition.pageSize = currentPage;
      _condition.currentPage = 1;

      setIsInit(false);

      fetch(
        `${apiurl}/?${getQueryString(_condition)}${
          !filterEvent.length ? '&eventtype=' : ''
        }`
      )
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          } else {
            throw res;
          }
        })
        .catch((data) => {
          setProducts([]);
          setProductCnt(0);
        })
        .then(({ list, currentPage, productCnt }) => {
          currentPage = Number(currentPage);
          const _list = list.map((item) => {
            return {
              ...item,
              isLike: mylikeList.current[item.id] ? true : false,
            };
          });

          setProducts(_list);
          setProductCnt(productCnt);
          loading.current = false;

          const scrollY = localStorage.getItem('searchresultScroll');
          window.scrollTo(0, scrollY);
        });
      return;
    }

    fetch(
      `${apiurl}/?${getQueryString(_condition)}${
        !filterEvent.length ? '&eventtype=' : ''
      }`
    )
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw res;
        }
      })
      .catch((data) => {
        setProducts([]);
        setProductCnt(0);
      })
      .then(({ list, currentPage, productCnt }) => {
        currentPage = Number(currentPage);
        const _list = list.map((item) => {
          return {
            ...item,
            isLike: mylikeList.current[item.id] ? true : false,
          };
        });

        setProducts((products) => {
          if (currentPage == 1) return _list;
          return [...products, ..._list];
        });
        setCurrentPage(currentPage);
        setProductCnt(productCnt);
        loading.current = false;
      });
  }, [filterBrand, filterEvent, filter, searchValue, currentPage]);

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
  }, [currentPage, productCnt]);

  const saveScroll = () => {
    const scrollY = window.scrollY;
    localStorage.setItem('searchresultScroll', scrollY);
  };
  React.useEffect(() => {
    window.addEventListener('scroll', saveScroll, true);

    return () => {
      window.removeEventListener('scroll', saveScroll, true);
    };
  }, []);

  return (
    <View
      isInit={isInit}
      searchValue={searchValue}
      onSearchChange={setSearchValue}
      onSearch={onSearch}
      brand={brand}
      event={event}
      filterBrand={filterBrand}
      filterEvent={filterEvent}
      changeBrand={changeBrand}
      changeEvent={changeEvent}
      sortClick={sortClick}
      categoryClick={categoryClick}
      categoryDeleteChoice={categoryDeleteChoice}
      filter={filter}
      filterOpen={filterOpen}
      setFilterOpen={setFilterOpen}
      setFilter={setFilter}
      products={products}
      productCnt={productCnt}
      changeLike={changeLike}
      gotoDetail={gotoDetail}
    />
  );
};

export default Container;
