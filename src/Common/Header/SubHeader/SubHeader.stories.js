import { SubHeader } from 'Common/Header';

export default {
  title: 'Frame/Header',
  components: SubHeader,
};

const Template = (args) => <SubHeader {...args} />;

export const SubSearch = Template.bind({});
SubSearch.args = {
  title: '제목',
  search: true,
};

export const SubNoSearch = Template.bind({});
SubNoSearch.args = {
  title: '제목',
  search: false,
};

export const SubShare = Template.bind({});
SubShare.args = {
  title: '제목',
  share: true,
};
