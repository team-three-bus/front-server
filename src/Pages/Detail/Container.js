import React from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import qs from 'query-string';

import View from './View';

const Container = () => {
  const { id } = useParams();

  const [product, setProduct] = React.useState(null);
  const getPerPrice = React.useCallback((price, event) => {
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
  });

  const changeLike = () => {};

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    const options = {
      method: 'GET',
      headers: {},
    };

    if (token) {
      options.headers.authorization = token;
    }

    fetch(`http://133.186.208.125:3000/products?id=${id}`, options)
      .then((res) => res.json())
      .then(({ product }) => {
        console.log(product);
        if (!product) return;
        setProduct({
          ...product,
          event: product.events[product.events.length - 1].eventType,
        });
      });
  }, []);

  return (
    <View
      id={id}
      product={product}
      getPerPrice={getPerPrice}
      changeLike={changeLike}
    />
  );
};

export default Container;
