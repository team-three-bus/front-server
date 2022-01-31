import Search from 'Pages/Search';

export default {
  title: 'Pages/Search',
  components: Search,
};

const Template = (args) => <Search {...args} />;

export const Example = Template.bind({});
Example.args = {};
