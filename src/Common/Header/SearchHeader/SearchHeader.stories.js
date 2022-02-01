import { useArgs } from '@storybook/client-api';

import { SearchHeader } from 'Common/Header';

export default {
  title: 'Frame/Header',
  components: SearchHeader,
};

const Template = (args) => {
  const [_, updateArgs] = useArgs({});
  const onSearchChange = (searchValue) => {
    updateArgs({ searchValue });
  };
  const onKeyDown = () => {};
  const onSearch = () => {};

  return (
    <SearchHeader
      {...args}
      onSearchChange={onSearchChange}
      onSearch={onSearch}
      onKeyDown={onKeyDown}
    />
  );
};

export const SearchExample = Template.bind({});
SearchExample.args = {
  searchValue: '',
};
