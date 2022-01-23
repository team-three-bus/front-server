import MyLike from 'Pages/MyLike';

export default {
  title: 'Pages/MyLike',
  components: MyLike,
};

const Template = (args) => <MyLike {...args} />;

export const Example = Template.bind({});
Example.args = {};
