import Detail from 'Pages/Detail';

export default {
  title: 'Pages/Detail',
  components: Detail,
};

const Template = (args) => <Detail {...args} />;

export const Example = Template.bind({});
Example.args = {};
