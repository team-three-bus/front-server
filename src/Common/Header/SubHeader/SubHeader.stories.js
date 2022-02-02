import { SubHeader } from 'Common/Header';

export default {
  title: 'Frame/Header',
  components: SubHeader,
};

const Template = (args) => <SubHeader {...args} />;

export const SubExample = Template.bind({});
SubExample.args = {
  title: '제목',
  search: true,
};

export const SubNoSearch = Template.bind({});
SubNoSearch.args = {
  title: '제목',
  search: false,
};
