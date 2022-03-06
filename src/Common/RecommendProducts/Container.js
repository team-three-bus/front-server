import React, { useEffect, useState } from 'react';
import * as request from 'Common/Util/HttpRequest';
import View from "./View";

function Container() {
  const maxRecommendItem = 10;
  const [recommendItems, setRecommendItems] = useState([]);
  // TODO : 닉네임 처리
  const [username, setUsername] = useState();

  useEffect(() => {
    const items = request.getRecommendItems({ 
      userId: 7, // TODO : user 정보 받아와 실제 id값 넘겨서 처리
      size: maxRecommendItem 
    })
      .then(res => setRecommendItems(res.data.list))
  }, [])

  return (
    <View 
      username={username}
      recommendItems={recommendItems}
    />
  )
}

export default Container;
