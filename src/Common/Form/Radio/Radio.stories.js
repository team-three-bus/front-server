import { useArgs } from '@storybook/client-api';

import { Radio } from 'Common/Form';

export default {
  title: 'Form/Radio',
  components: Radio,
};

const Template = (args) => {
  const [_, updateArgs] = useArgs({});
  const onChange = (checked) => {
    updateArgs({ checked });
  };
  return <Radio {...args} onChange={onChange} />;
};

export const False = Template.bind({});
False.args = {
  id: 'radio1',
  name: 'radio',
  checked: false,
  label: 'radio1',
};

export const True = Template.bind({});
True.args = {
  id: 'radio2',
  name: 'radio',
  checked: true,
  label: 'radio2',
};
