import { Mark } from 'Common/Mark';

export default {
  title: 'Mark/Mark',
  components: Mark,
};

const Template = (args) => <Mark {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: '샐러드',
};
