import { BottomSheet } from './';

export default {
  title: 'Modal/BottomSheet',
  components: BottomSheet,
};

const Template = (args) => <BottomSheet {...args} />;

export const Example = Template.bind({});
Example.displayName = 'BottomSheet';
Example.args = {
  open: true,
  children: `내용`,
};
