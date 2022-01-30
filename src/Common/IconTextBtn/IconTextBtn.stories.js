import { IconTextBtn } from 'Common/IconTextBtn';

export default {
  title: 'Btn/IconTextBtn',
  components: IconTextBtn,
};

const Template = (args) => <IconTextBtn {...args} />;

export const Reset = Template.bind({});
Reset.args = {
  icon: 'reset',
  children: '선택 초기화',
};
