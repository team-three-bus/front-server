import { useArgs } from '@storybook/client-api';

import { FilterPopup } from 'Common/FilterPopup';

export default {
  title: 'FilterPopup/FilterPopup',
  components: FilterPopup,
};

const Template = (args) => {
  const [{ open, filter }, updateArgs] = useArgs({});
  const setOpen = (open) => {
    updateArgs({ open });
  };
  const setFilter = (filter) => {
    updateArgs({ filter });
  };
  return <FilterPopup {...args} setFilter={setFilter} setOpen={setOpen} />;
};

export const Example = Template.bind({});
Example.args = {
  open: true,
  filter: {
    order: ['lowPrice'],
    category: [],
    event: [],
    order: [],
  },
};
