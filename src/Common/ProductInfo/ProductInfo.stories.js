import { ProductInfo } from 'Common/ProductInfo';

import tempProductImg from 'Common/Product/img/tempProductImg.jpg';

export default {
  title: 'ProductInfo/ProductInfo',
  components: ProductInfo,
};

const Template = (args) => <ProductInfo {...args} />;

const productData = {
  img: tempProductImg,
  title: '서울) 비요뜨',
  price: `1,500원 (1개당 750원)`,
  like: true,
  plus: 'oneone',
  store: 'emart24',
};

export const Exmaple = Template.bind({});
Exmaple.args = {
  ...productData,
};
