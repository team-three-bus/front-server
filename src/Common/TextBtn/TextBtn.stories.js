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
