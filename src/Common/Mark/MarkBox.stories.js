import { MarkBox } from 'Common/Mark';
import { Mark } from 'Common/Mark';

export default {
  title: 'Mark/MarkBox',
  components: MarkBox,
};

const Template = (args) => <MarkBox {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: (
    <>
      <Mark>샐러드</Mark>
      <Mark>샐러드</Mark>
      <Mark>샐러드</Mark>
      <Mark>샐러드</Mark>
      <Mark>샐러드</Mark>
      <Mark>샐러드</Mark>
    </>
  ),
};
