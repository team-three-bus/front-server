import { BtnArea, Btn } from 'Common/Btn';

export default {
  title: 'Btn/BtnArea',
  components: BtnArea,
};

const Template = (args) => <BtnArea {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: <Btn>버튼</Btn>,
};

export const SideSpacing = Template.bind({});
SideSpacing.args = {
  children: <Btn>버튼</Btn>,
  sidespacing: true,
};
