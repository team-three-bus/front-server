import { TextBtn } from 'Common/TextBtn';

export default {
  title: 'Btn/TextBtn',
  components: TextBtn,
};

const Template = (args) => <TextBtn {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: '테스트 버튼',
};

export const SM = Template.bind({});
SM.args = {
  children: '테스트 버튼',
  size: 'sm',
};

export const LG = Template.bind({});
LG.args = {
  children: '테스트 버튼',
  size: 'lg',
};

export const VariantLine = Template.bind({});
VariantLine.args = {
  children: '테스트 버튼',
  variant: 'line',
};
