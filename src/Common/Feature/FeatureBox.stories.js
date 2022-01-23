import { FeatureBox } from 'Common/Feature';
import { Feature } from 'Common/Feature';

export default {
  title: 'Feature/FeatureBox',
  components: FeatureBox,
};

const Template = (args) => <FeatureBox {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: (
    <>
      <Feature>샐러드</Feature>
      <Feature>샐러드</Feature>
      <Feature>샐러드</Feature>
      <Feature>샐러드</Feature>
      <Feature>샐러드</Feature>
      <Feature>샐러드</Feature>
    </>
  ),
};
