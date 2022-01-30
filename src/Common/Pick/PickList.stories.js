import { PickList, Pick } from 'Common/Pick';

export default {
  title: 'Pick/PickList',
  components: PickList,
};

const Template = (args) => <PickList {...args} />;

export const Example = Template.bind({});
Example.args = {
  title: '제목',
  children: (
    <>
      <Pick>내용</Pick>
      <Pick>내용</Pick>
      <Pick>내용</Pick>
      <Pick>내용내용</Pick>
      <Pick>내용</Pick>
    </>
  ),
};
