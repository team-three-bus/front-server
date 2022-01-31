import { Pick } from 'Common/Pick';

export default {
  title: 'Pick/Pick',
  components: Pick,
};

const Template = (args) => <Pick {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: '내용',
};

export const ON = Template.bind({});
ON.args = {
  children: '내용',
  on: true,
};
