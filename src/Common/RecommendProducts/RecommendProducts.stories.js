import RecommendProducts from './index';

export default {
  title: 'Home/RecommendProducts',
  components: RecommendProducts,
};

const Template = (args) => <RecommendProducts {...args} />;

export const Default = Template.bind({});