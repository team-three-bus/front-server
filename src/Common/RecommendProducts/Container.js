import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as request from 'Common/Util/HttpRequest';
import View from './View';

function Container() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState(
    localStorage.getItem('nickname') !== 'undefined' &&
      localStorage.getItem('nickname')
  );
  const [recommendItems, setRecommendItems] = useState([]);

  useEffect(() => {
    getData();
    getNickName();
  }, []);

  const getData = async () => {
    await request
      .getRecommendItems()
      .then((res) => setRecommendItems(res.data.list));
  };

  const getNickName = async () => {
    await request.getNickname().then((res) => setNickname(res.data.nickname));
  };

  const gotoDetail = (id) => {
    return (window.location.href = `/detail/${id}`);
  };

  const changeLike = async (product) => {
    const { id, isLike } = product;
    const token = localStorage.getItem('access_token');
    if (!token) return navigate('/login');
    if (isLike) {
      await request.deleteLikeItem({ id });
    } else {
      await request.postLikeItem({ id });
    }
    const newRecommendItems = recommendItems.map((product) => {
      if (product.id === id) {
        product.isLike = !product.isLike;
      }
      return product;
    });
    setRecommendItems(newRecommendItems);
  };

  return (
    <View
      nickname={nickname}
      recommendItems={recommendItems}
      gotoDetail={gotoDetail}
      changeLike={changeLike}
    />
  );
}

export default Container;
