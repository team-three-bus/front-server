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
  }, [])
  
  const getPopularItems = async () => {
    const res = await request.getPopularItems({ num : popularItemsPageNum });
    setPopularItems(res.data.list);
  }
  
  const getMorePopularItems = async () => {
    const res = await request.getPopularItems({ num : popularItemsPageNum + 1, category: popularCategory });
    setPopularItems([...popularItems, ...res.data.list]);
    setPopularItemsPageNum(popularItemsPageNum + 1);
  }
  
  const onClickMoreBtn = () => {
    getMorePopularItems();
  }
  
  return (
    <View 
      maxPopularItemsPageNum={maxPopularItemsPageNum}
      popularItems={popularItems}
      popularItemsPageNum={popularItemsPageNum}
      onClickMoreBtn={onClickMoreBtn}
    />
  );
}

export default Container;