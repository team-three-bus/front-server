import { Feature } from 'Common/Feature';

export default {
  title: 'Feature/Feature',
  components: Feature,
};

const Template = (args) => <Feature {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: '샐러드',
};
