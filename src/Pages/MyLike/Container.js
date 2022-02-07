import { Pick } from 'Common/Pick/Pick.styles';
import React from 'react';

import View from './View';

const Container = () => {
  const [isEvent, setIsEvent] = React.useState(false);
  const [filterOpen, setFilterOpen] = React.useState(false);
  const [filter, setFilter] = React.useState({
    brand: [],
    category: [],
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
    />
  );
};

export default Container;
