import { useArgs } from '@storybook/client-api';

import { NormalTitle } from 'Common/NormalTitle';

export default {
  title: 'Title/NormalTitle',
  components: NormalTitle,
};

const Template = (args) => {
  const [_, updateArgs] = useArgs({});

  return <NormalTitle {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title: '제목',
};
