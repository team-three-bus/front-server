import { SubHeader } from 'Common/SubHeader';

export default {
  title: 'Frame/SubHeader',
  components: SubHeader,
};

const Template = (args) => <SubHeader {...args} />;

export const Example = Template.bind({});
Example.args = {
  title: '제목',
};
