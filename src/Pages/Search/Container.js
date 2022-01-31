import React from 'react';

import View from './View';

const Container = () => {
  const [searchValue, onSearchChange] = React.useState('');

  const [searchList, setSearchList] = React.useState(
    JSON.parse(localStorage.getItem('searchList')) || []
  );
  const onSearch = (value) => {
    setSearchList((searchList) => {
      const newSearchList = [
        ...searchList,
        { name: value, id: searchList.length },
      ];
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
