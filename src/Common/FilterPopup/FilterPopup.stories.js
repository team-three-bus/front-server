import { FilterPopup } from 'Common/FilterPopup';

export default {
  title: 'FilterPopup/FilterPopup',
  components: FilterPopup,
};

const Template = (args) => <FilterPopup {...args} />;

export const Example = Template.bind({});
Example.args = {};
