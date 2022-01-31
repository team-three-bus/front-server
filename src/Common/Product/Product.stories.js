import { Product } from 'Common/Product';

import tempProductImg from './img/tempProductImg.jpg';

export default {
  title: 'Product/Product',
  components: Product,
};

const Template = (args) => <Product {...args} />;

const productData = {
  img: tempProductImg,
  title: '서울) 비요뜨',
  price: 1500,
};

export const Emart24 = Template.bind({});
Emart24.args = {
  ...productData,
  store: 'emart24',
};

export const CU = Template.bind({});
CU.args = {
  ...productData,
  store: 'cu',
};

export const GS25 = Template.bind({});
GS25.args = {
  ...productData,
  store: 'gs25',
};

export const Seven11 = Template.bind({});
Seven11.args = {
  ...productData,
  store: 'seven11',
};

export const OneOne = Template.bind({});
OneOne.args = {
  ...productData,
  plus: 'oneone',
};

export const TwoOne = Template.bind({});
TwoOne.args = {
  ...productData,
  plus: 'twoone',
};

export const NormalSize = Template.bind({});
NormalSize.args = {
  ...productData,
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  ...productData,
  size: 'sm',
};

export const LikeOn = Template.bind({});
LikeOn.args = {
  ...productData,
  plus: 'oneone',
  like: true,
};

export const SaleEnd = Template.bind({});
SaleEnd.args = {
  ...productData,
  plus: 'oneone',
  like: true,
  saleend: true,
};
