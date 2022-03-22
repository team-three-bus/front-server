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
  const mylikeList = React.useRef([]);
  const [recommendItems, setRecommendItems] = useState([]);

  useEffect(async () => {
    getNickName();
    if (localStorage.getItem('access_token')) {
      await getMyLike();
    }
    await getData();
  }, []);

  const getMyLike = async () => {
    await request.getMyLike().then((res) => {
      const list = res.data.list;
      const _mylikeList = {};
      list.forEach((item) => {
        _mylikeList[item.id] = item;
      });
      mylikeList.current = _mylikeList;

      mylikeList.current = _mylikeList;
    });
  };

  const getData = async () => {
    await request.getRecommendItems().then((res) => {
      if (localStorage.getItem('access_token')) {
        const _list = res.data.list.map((item) => {
          return {
            ...item,
            isLike: mylikeList.current[item.id] ? true : false,
          };
        });
        setRecommendItems(_list);
      } else {
        setRecommendItems(res.data.list);
      }
    });
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
