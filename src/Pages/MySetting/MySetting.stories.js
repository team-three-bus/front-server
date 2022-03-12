import MySetting from 'Pages/MySetting';

export default {
  title: 'Pages/MySetting',
  components: MySetting,
};

const Template = (args) => <MySetting {...args} />;

export const Example = Template.bind({});
Example.args = {};
