import { Empty } from 'Common/Empty';

export default {
  title: 'Empty/Empty',
  components: Empty,
};

const Template = (args) => <Empty {...args} />;

export const Example = Template.bind({});
Example.args = {};
