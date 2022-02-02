import React from 'react';

import View from './View';

const Container = () => {
  const [searchValue, setSearchValue] = React.useState('');
  const onSearch = React.useCallback((value) => {}, []);
  return (
    <View
      searchValue={searchValue}
      onSearchChange={setSearchValue}
      onSearch={onSearch}
    />
  );
};

export default Container;
