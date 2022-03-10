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

export const DefaultStyle = Template.bind({});
DefaultStyle.args = {
  sort: 'default',
  children: '내용',
};

export const DefaultSecondary = Template.bind({});
DefaultSecondary.args = {
  sort: 'default',
  variant: 'secondary',
  children: '내용',
};

export const DefaultTextSM = Template.bind({});
DefaultTextSM.args = {
  sort: 'default',
  size: 'textsm',
  children: '내용',
};

export const DefaultDisabled = Template.bind({});
DefaultDisabled.args = {
  sort: 'default',
  disabled: true,
  children: '내용',
};
