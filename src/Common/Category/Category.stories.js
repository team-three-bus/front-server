import Category from './index';

export default {
  title: 'Home/Category',
  components: Category,
};

const Template = (args) => <Category {...args} />;

export const Default = Template.bind({});