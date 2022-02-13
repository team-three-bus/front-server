import React from 'react';

import View from './View';

const Container = () => {
  const maxSearchListLength = React.useRef(10);
  const [searchValue, onSearchChange] = React.useState('');

  const [searchList, setSearchList] = React.useState(
    JSON.parse(localStorage.getItem('searchList')) || []
  );
  const onSearch = (value) => {
    setSearchList((prevSearchList) => {
      let searchList = prevSearchList;
      if (maxSearchListLength.current <= prevSearchList.length) {
        const _prevSearchList = [...prevSearchList];
        _prevSearchList.pop();
        searchList = _prevSearchList;
      }
      const newSearchList = [{ name: value, id: value }, ...searchList];
      localStorage.setItem('searchList', JSON.stringify(newSearchList));
      return newSearchList;
    });
  };

  const customSetSearchList = (value) => {
    localStorage.setItem('searchList', JSON.stringify(value));
    setSearchList(value);
  };

  return (
    <View
      searchValue={searchValue}
      onSearchChange={onSearchChange}
      searchList={searchList}
      setSearchList={customSetSearchList}
      onSearch={onSearch}
    />
  );
};

export default Container;
