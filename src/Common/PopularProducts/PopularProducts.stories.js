import PopularProducts from './index';

export default {
  title: 'Home/PopularProducts',
  components: PopularProducts,
};

const Template = (args) => <Category {...args} />;

export const Default = Template.bind({});