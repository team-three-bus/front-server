import { Btn } from 'Common/Btn';

export default {
  title: 'Btn/Btn',
  components: Btn,
};

const Template = (args) => <Btn {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: '내용',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: '내용',
  disabled: true,
};
