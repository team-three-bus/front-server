import React from 'react';

import View from './View';

const Container = () => {
  const [searchValue, onSearchChange] = React.useState('');
  const [searchList, setSearchList] = React.useState([]);
  const onSearch = (value) => {
    setSearchList((searchList) => {
      return [...searchList, { name: value, id: searchList.length }];
    });
  };

  return (
    <View
      searchValue={searchValue}
      onSearchChange={onSearchChange}
      searchList={searchList}
      setSearchList={setSearchList}
      onSearch={onSearch}
    />
  );
};

export default Container;
