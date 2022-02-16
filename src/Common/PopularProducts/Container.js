import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as request from 'Common/Util/HttpRequest';
import View from './View';

function Container() {
  const navigate = useNavigate();
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
  
  const changeLike = async ({ id, isLike }) => {
    const token = localStorage.getItem('access_token');
    if (!token) return navigate('/login');
    if (isLike) {
      await request.deleteLikeItem({id});
    } else {
      await request.postLikeItem({id});
    }
    getPopularItems();
  };
  
  return (
    <View
      maxPopularItemsPageNum={maxPopularItemsPageNum}
      popularItems={popularItems}
      popularItemsPageNum={popularItemsPageNum}
      popularCategory={popularCategory}
      onClickMoreBtn={onClickMoreBtn}
      onClickCategory={onClickCategory}
      changeLike={changeLike}
    />
  );
}

export default Container;
