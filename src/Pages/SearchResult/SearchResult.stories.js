import SearchResult from 'Pages/SearchResult';

export default {
  title: 'Pages/SearchResult',
  components: SearchResult,
};

const Template = (args) => <SearchResult {...args} />;

export const Example = Template.bind({});
Example.args = {};
