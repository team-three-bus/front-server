import { useArgs } from '@storybook/client-api';

import { MainHeader } from 'Common/Header';

export default {
  title: 'Frame/Header',
  components: MainHeader,
};

const Template = (args) => {
  const [_, updateArgs] = useArgs({});
  const onSearchChange = (searchValue) => {
    updateArgs({ searchValue });
  };
  const onSearch = () => {};

  return (
    <MainHeader {...args} onSearchChange={onSearchChange} onSearch={onSearch} />
  );
};

export const MainHeaderExample = Template.bind({});
MainHeaderExample.args = {};

export const MainHeaderSearch = Template.bind({});
MainHeaderSearch.args = {
  search: true,
  searchValue: '',
};
