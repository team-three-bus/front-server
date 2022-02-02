import Category from 'Pages/Category';

export default {
  title: 'Pages/Category',
  components: Category,
};

const Template = (args) => <Category {...args} />;

export const Example = Template.bind({});
Example.args = {};
