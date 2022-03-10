import { ContentArea } from 'Common/ContentArea';

export default {
  title: 'ContentArea/ContentArea',
  components: ContentArea,
};

const Template = (args) => <ContentArea {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: <div style={{ height: '500px', border: '1px solid red' }}></div>,
};
