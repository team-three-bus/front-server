import React from 'react';
import { useNavigate } from 'react-router-dom';

import View from './View';

const Container = () => {
  const navigate = useNavigate();
  const maxSearchListLength = React.useRef(10);
  const [searchValue, onSearchChange] = React.useState('');

  const [searchList, setSearchList] = React.useState(
    JSON.parse(localStorage.getItem('searchList')) || []
  );
  const onSearch = (value) => {
    setSearchList((prevSearchList) => {
      let searchList = prevSearchList;

      searchList = prevSearchList.filter((item) => item.name !== value);

      if (maxSearchListLength.current <= prevSearchList.length) {
        const _prevSearchList = [...prevSearchList];
        _prevSearchList.pop();
        searchList = _prevSearchList;
      }
      const newSearchList = [{ name: value, id: value }, ...searchList];
      localStorage.setItem('searchList', JSON.stringify(newSearchList));
      return newSearchList;
    });
    setTimeout(() => {
      navigate({
        pathname: `/searchresult?search=${value}`,
      });
    }, 0);
  };

  const customSetSearchList = (value) => {
    localStorage.setItem('searchList', JSON.stringify(value));
    setSearchList(value);
  };

  const gotoSearchResult = (search) => {
    navigate({
      pathname: `/searchresult?search=${search}`,
    });
  };

  return (
    <View
      searchValue={searchValue}
      onSearchChange={onSearchChange}
      searchList={searchList}
      setSearchList={customSetSearchList}
      onSearch={onSearch}
      gotoSearchResult={gotoSearchResult}
    />
  );
};

export default Container;
