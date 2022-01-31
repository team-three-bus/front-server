import { useArgs } from '@storybook/client-api';

import { Mark } from 'Common/Mark';

export default {
  title: 'Mark/Mark',
  components: Mark,
};

const Template = (args) => {
  const [_, updateArgs] = useArgs();
  const deleteMark = (id) => {
    console.log(id);
  };
  return <Mark deleteMark={deleteMark} {...args} />;
};

export const Example = Template.bind({});
Example.args = {
  id: 0,
  children: '샐러드',
};
