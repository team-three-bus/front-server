import { ItemList, Item } from 'Common/ItemList';
import { Product } from 'Common/Product';
import tempProductImg from 'Common/Product/img/tempProductImg.jpg';

export default {
  title: 'List/ItemList',
  components: ItemList,
};

const Template = (args) => <ItemList {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: (
    <>
      <Item>
        <div style={{ height: '200px', border: '1px solid black' }}></div>
      </Item>
      <Item>
        <div style={{ height: '200px', border: '1px solid black' }}></div>
      </Item>
      <Item>
        <div style={{ height: '200px', border: '1px solid black' }}></div>
      </Item>
    </>
  ),
};

export const ProductList = Template.bind({});
ProductList.args = {
  children: (
    <>
      <Item>
        <Product
          img={tempProductImg}
          store={'emart24'}
          title={'서울) 비요뜨'}
          price={1500}
          plus={'oneone'}
          src={tempProductImg}
          store={'emart24'}
        />
      </Item>
      <Item>
        <Product
          img={tempProductImg}
          store={'emart24'}
          title={'서울) 비요뜨'}
          price={1500}
          plus={'oneone'}
          src={tempProductImg}
          store={'emart24'}
        />
      </Item>
      <Item>
        <Product
          img={tempProductImg}
          store={'emart24'}
          title={'서울) 비요뜨'}
          price={1500}
          plus={'oneone'}
          src={tempProductImg}
          store={'emart24'}
        />
      </Item>
    </>
  ),
};
