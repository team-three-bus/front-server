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

  let {
    search: locationSearch = '',
    brand: locationBrand,
    event: locationEvent,
  } = qs.parse(location.search.slice(1), {
    arrayFormat: 'comma',
  });

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
  };

  const changeEvent = (event) => {
    setFilterEvent((prevFilterEvent) => {
      if (prevFilterEvent.indexOf(event) > -1) {
        return prevFilterEvent.filter((item) => item != event);
      } else {
        return [...prevFilterEvent, event];
      }
    });
  };

  const [products, setProducts] = React.useState([]);

  const changeLike = React.useCallback(() => {});
  const gotoDetail = React.useCallback(() => {});

  React.useEffect(() => {
    const _condition = {};
    _condition.search = searchValue;
    _condition.brand = filterBrand.map((item) => {
      return DATA_FORWARD.brand[item];
    });
    _condition.event = filterEvent.map((item) => {
      return DATA_FORWARD.event[item];
    });

    const querystring = qs.stringify(_condition, { arrayFormat: 'comma' });
    navigate(`?${querystring}`);

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
      })
      .then(({ list }) => {
        setProducts(list);
      });
  }, [filterBrand, filterEvent]);

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
      products={products}
      changeLike={changeLike}
      gotoDetail={gotoDetail}
    />
  );
};

export default Container;
