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
    category: locationCategory,
    brand: locationBrand,
    event: locationEvent,
  } = qs.parse(location.search.slice(1), { arrayFormat: 'comma' });

  if (locationBrand && !Array.isArray(locationBrand))
    locationBrand = [locationBrand];
  if (!locationBrand) locationBrand = [];

  if (locationCategory && !Array.isArray(locationCategory)) {
    locationCategory = [locationCategory];
  } else if (!locationCategory) locationCategory = [];

  const [isEvent, setIsEvent] = React.useState(locationEvent);
  const [filterOpen, setFilterOpen] = React.useState(false);
  const [filter, setFilter] = React.useState({
    brand: locationBrand,
    category: locationCategory,
  });

  const brandClick = React.useCallback(() => {
    setFilterOpen(true);
  }, []);
  const categoryClick = React.useCallback(() => {
    setFilterOpen(true);
  }, []);

  const brandDeleteChoice = React.useCallback(() => {
    setFilter((filter) => {
      const newfilter = JSON.parse(JSON.stringify(filter));
      newfilter.brand = [];
      return newfilter;
    });
  }, []);
  const categoryDeleteChoice = React.useCallback(() => {
    setFilter((filter) => {
      const newfilter = JSON.parse(JSON.stringify(filter));
      newfilter.category = [];
      return newfilter;
    });
  }, []);

  const customSetFilter = React.useCallback((filter) => {
    setFilter(filter);
  }, []);

  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const _condition = {};

    Object.entries(filter).forEach(([key, item]) => {
      _condition[key] = item.map((it) => DATA_FORWARD[key][it]);
    });

    if (isEvent) {
      _condition.event = isEvent;
    }

    const querystring = qs.stringify(_condition, { arrayFormat: 'comma' });
    navigate(`?${querystring}`);

    const token = localStorage.getItem('token');

    fetch(`http://133.186.208.125:3000/like?${getQueryString(_condition)}`, {
      method: 'GET',
      headers: {
        authorization: token,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          return res.json();
        }
      })
      .then(({ list }) => {
        const _list = list.map((item) => ({ ...item, isLike: true }));
        setProducts((prodtucts) => {
          return [..._list];
        });
      });
  }, [filter, isEvent]);

  const changeLike = React.useCallback(() => {}, []);

  return (
    <View
      isEvent={isEvent}
      setIsEvent={setIsEvent}
      filterOpen={filterOpen}
      setFilterOpen={setFilterOpen}
      filter={filter}
      setFilter={customSetFilter}
      brandClick={brandClick}
      categoryClick={categoryClick}
      brandDeleteChoice={brandDeleteChoice}
      categoryDeleteChoice={categoryDeleteChoice}
      products={products}
      changeLike={changeLike}
    />
  );
};

export default Container;
