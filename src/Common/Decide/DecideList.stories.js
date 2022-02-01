import { DecideList, Decide } from 'Common/Decide';

export default {
  title: 'Decide/DecideList',
  components: DecideList,
};

const Template = (args) => <DecideList {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: (
    <>
      <Decide>내용</Decide>
      <Decide>내용</Decide>
      <Decide>내용</Decide>
      <Decide>내용내용</Decide>
      <Decide>내용</Decide>
    </>
  ),
};

export const LineBottom = Template.bind({});
LineBottom.args = {
  line: 'bottom',
  children: (
    <>
      <Decide>내용</Decide>
      <Decide>내용</Decide>
      <Decide>내용</Decide>
      <Decide>내용내용</Decide>
      <Decide>내용</Decide>
    </>
  ),
};
