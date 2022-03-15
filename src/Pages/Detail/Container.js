import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as request from 'Common/Util/HttpRequest';
import View from './View';

const Container = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [sameProducts, setSameProducts] = useState([]);
  const [graphData, setGraphData] = useState(null);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    getItemDetail();
  }, []);

  const getPerPrice = (price, event) => {
    switch (event) {
      case 'oneone':
      case '1+1':
        return price / 2;
      case 'twoone':
      case '2+1':
        return Math.ceil((price * 2) / 3);
      default:
        return 0;
    }
  };

  const changeLike = async ( product, type ) => {
    const { id, isLike } = product;
    const token = localStorage.getItem('access_token');
    if (!token) return navigate('/login');
    if (isLike) {
      await request.deleteLikeItem({id});
    } else {
      await request.postLikeItem({id});
    }
    if ( type === 'product' ) {
      setProduct({ ...product, isLike: !product.isLike });
    } else {
      const newSameProduct = sameProducts.map((product) => {
        if ( product.id === id ) {
          product.isLike = !product.isLike;
        }
        return product;
      })
      setSameProducts(newSameProduct);
    }
  };

  const getItemDetail = async () => {
    await request.getItemDetail({ id })
      .then(res => res.data)
      .then(({ product, sameProductList }) => {
        setProduct(product);
        setSameProducts(sameProductList);
        makeGraphData(product.events, product.price);
      })
  }

  const makeGraphData = (events, price) => {
    const _event = Object.entries(events);
    const _graphData = [];
    const typeData = [];
    _event.map((event, i) => {
      if (i === 0) {
        _graphData.push({ "x": "", "y": null})
      }
      const { eventMonth, eventYear, eventType } = event[1];
      typeData.push(eventType);
      _graphData.push({
        "x" : `${eventYear}-${eventMonth}`,
        "y" : getPerPrice(price, eventType)
      })
      if (i === _event.length - 1) {
        _graphData.push({ "x": " ", "y": null })
      }
    })
    setGraphData([
      { "id": "priceGraph", "data" : _graphData.reverse()}
    ]); 
  
    getMsgText(typeData);
  }
  
  const getMsgText = (typeData) => {
    if (typeData.length === 1) {
      return setMsg(`"새로운 ${typeData[0]} 등장! 놓칠 수 없지!"`);
    }

    if (typeData.length === 2) {
      const [first, last] = typeData.reverse();
      if (first === last) {
        return setMsg(`"항상 고마운 ${last} 상품!"`);
      } else if (
        (first === '2+1' && last === '1+1')
      ) {
        return setMsg(`"2+1이 1+1으로?! 무조건이지!"`);
      } else if (
        (first === '1+1' && last === '2+1')
      ) {
        return setMsg(`"2+1이지만 그래도 좋아!"`);
      }
    }

    if (typeData.length === 3) {
      const [first, second, last] = typeData.reverse();
      if (first === second && second === last) {
        return setMsg(`"항상 고마운 ${last} 상품!"`);
      } else if (
        (first === last && second !== last) || 
        (second === last && first !== last)
      ) {
        return setMsg(`"또 한번 찾아온 ${last} 이득!"`);
      } else if (
        (first === '2+1' && last === '1+1') ||
        (second === '2+1' && last === '1+1') 
      ) {
        return setMsg(`"2+1이 1+1으로?! 무조건이지!"`);
      } else if (
        (first === '1+1' && last === '2+1') ||
        (second === '1+1' && last === '2+1') 
      ) {
        return setMsg(`"2+1이지만 그래도 좋아!"`);
      }
    }
  }

  const shareLink = (product) => {
    const {id, title, imageUrl, brand, lastEventType} = product;
    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: `${title}`,
        description: `지금 ${brand}에서 ${lastEventType}! 편하에서 확인하세요!`,
        imageUrl: imageUrl,
        link: { webUrl: `https://pyunha.com/detail/${id}` },
      },
      buttons: [
        {
          title: '편하에서 보기',
          link: { webUrl: `https://pyunha.com/detail/${id}` }
        }
      ],
    })
  }

  const gotoDetail = (id) => {
    return (window.location.href = `/detail/${id}`);
  };

  return (
    <View
      msg={msg}
      product={product}
      sameProducts={sameProducts}
      graphData={graphData}
      getPerPrice={getPerPrice}
      changeLike={changeLike}
      shareLink={shareLink}
      gotoDetail={gotoDetail}
    />
  );
};

export default Container;
