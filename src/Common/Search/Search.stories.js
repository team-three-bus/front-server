import { useArgs } from '@storybook/client-api';

import { Search } from 'Common/Search';

export default {
  title: 'Form/Search',
  components: Search,
};

const Template = (args) => {
  const [_, updateArgs] = useArgs({});
  const onChange = (value) => {
    updateArgs({ value });
  };
  const onKeyDown = (keyCode) => {};
  return <Search {...args} onChange={onChange} onKeyDown={onKeyDown} />;
};

export const Example = Template.bind({});
Example.args = {
  value: '',
};
