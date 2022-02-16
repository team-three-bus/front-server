import React, { useEffect, useState } from 'react';
import * as request from 'Common/Util/HttpRequest';
import View from './View';

function Container() {
  const maxPopularItemsPageNum = 5;
  const [popularItems, setPopularItems] = useState([]);
  const [popularItemsPageNum, setPopularItemsPageNum] = useState(1);
  const [popularCategory, setPopularCategory] = useState(null);

  useEffect(() => {
    getPopularItems();
  }, []);

  useEffect(() => {
    getPopularItems();
  }, [popularCategory]);

  const getPopularItems = async () => {
    const res = await request.getPopularItems({
      num: popularItemsPageNum,
      category: popularCategory,
    });
    setPopularItems(res.data.list);
  };

  const getMorePopularItems = async () => {
    const res = await request.getPopularItems({
      num: popularItemsPageNum + 1,
      category: popularCategory,
    });
    setPopularItems([...popularItems, ...res.data.list]);
    setPopularItemsPageNum(popularItemsPageNum + 1);
  };

  const onClickMoreBtn = () => {
    getMorePopularItems();
  };

  const onClickCategory = (category) => {
    if (category === popularCategory) return;
    setPopularCategory(category);
    setPopularItemsPageNum(1);
  };
  
  return (
    <View
      maxPopularItemsPageNum={maxPopularItemsPageNum}
      popularItems={popularItems}
      popularItemsPageNum={popularItemsPageNum}
      popularCategory={popularCategory}
      onClickMoreBtn={onClickMoreBtn}
      onClickCategory={onClickCategory}
    />
  );
}

export default Container;
