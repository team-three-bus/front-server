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

  const loading = React.useRef(false);

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
      name: 'GS',
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
  const [currentPage, setCurrentPage] = React.useState(locationPage || 1);
  const [productCnt, setProductCnt] = React.useState(0);
  const changeLike = React.useCallback(() => {});
  const gotoDetail = React.useCallback((id) => {
    navigate({
      pathname: `/detail/${id}`,
    });
  });

  React.useEffect(() => {
    loading.current = true;
    const _condition = {};

    _condition.currentPage = currentPage;
    _condition.search = searchValue;
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

    fetch(`http://133.186.208.125:3000/elastic/?${getQueryString(_condition)}`)
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
        setProducts((prodtucts) => {
          if (currentPage == 1) return list;
          return [...prodtucts, ...list];
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

  return (
    <View
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
