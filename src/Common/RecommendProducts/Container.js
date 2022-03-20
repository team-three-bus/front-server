import React, { useEffect, useState } from 'react';
import * as request from 'Common/Util/HttpRequest';
import View from "./View";

function Container() {
  const [nickname, setNickname] = useState(localStorage.getItem('nickname') !== 'undefined' && localStorage.getItem('nickname'));
  const [recommendItems, setRecommendItems] = useState([]);

  useEffect(() => {
    getData();
    getNickName();
  }, [])

  const getData = async () => {
    await request.getRecommendItems()
      .then(res => setRecommendItems(res.data.list))
  }

  const getNickName = async () => {
   await request.getNickname()
    .then(res => setNickname(res.data.nickname))
  }

  const gotoDetail = (id) => {
    return (window.location.href = `/detail/${id}`);
  };

  return (
    <View 
      nickname={nickname}
      recommendItems={recommendItems}
      gotoDetail={gotoDetail}
    />
  )
}

export default Container;
