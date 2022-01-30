import { useArgs } from '@storybook/client-api';

import { Header } from 'Common/Header';

export default {
  title: 'Frame/Header',
  components: Header,
};

const Template = (args) => {
  const [_, updateArgs] = useArgs({});
  const onSearchChange = (searchValue) => {
    updateArgs({ searchValue });
  };
  const onSearch = () => {};

  return (
    <Header {...args} onSearchChange={onSearchChange} onSearch={onSearch} />
  );
};

export const Example = Template.bind({});
Example.args = {};

export const Search = Template.bind({});
Search.args = {
  search: true,
  searchValue: '',
};
