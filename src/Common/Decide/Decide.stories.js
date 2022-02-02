import { Decide } from 'Common/Decide';

export default {
  title: 'Decide/Decide',
  components: Decide,
};

const Template = (args) => <Decide {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: '내용',
};

export const ON = Template.bind({});
ON.args = {
  children: '내용',
  on: true,
};
