import RecommendProducts from './index';

export default {
  title: 'Home/RecommendProducts',
  components: RecommendProducts,
};

const Template = (args) => <Category {...args} />;

export const Default = Template.bind({});