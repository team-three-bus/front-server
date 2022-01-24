import { MarkBox } from 'Common/Mark';
import { Mark } from 'Common/Mark';

export default {
  title: 'Mark/MarkBox',
  components: MarkBox,
};

const Template = (args) => <MarkBox {...args} />;

const list = [
  { name: '샐러드0', id: 0 },
  { name: '샐러드1', id: 1 },
  { name: '샐러드2', id: 2 },
  { name: '샐러드3', id: 3 },
  { name: '샐러드4', id: 4 },
  { name: '샐러드5', id: 5 },
];

export const Example = Template.bind({});
Example.args = {
  list,
};
