import { Choice } from 'Common/Choice';

export default {
  title: 'Choice/Choice',
  components: Choice,
};

const Template = (args) => <Choice {...args} />;

export const NotChoosed = Template.bind({});
NotChoosed.args = {
  isChoosed: false,
  children: '선택',
  onClick: () => {},
};

export const ISChoosed = Template.bind({});
ISChoosed.args = {
  isChoosed: true,
  children: '결과 1',
  onClick: () => {},
  deleteChoice: () => {},
};

export const Large = Template.bind({});
Large.args = {
  isChoosed: false,
  children: '선택',
  size: 'lg',
  onClick: () => {},
};

export const Filter = Template.bind({});
Filter.args = {
  isChoosed: 'filter',
  children: '필터',
  onClick: () => {},
};
