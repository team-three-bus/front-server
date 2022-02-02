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
  const onSearch = () => {};

  return (
    <Search
      {...args}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onSearch={onSearch}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  sort: 'default',
  value: '',
};

export const Basic = Template.bind({});
Basic.args = {
  sort: 'basic',
  value: '',
};
