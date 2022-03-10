import { useArgs } from '@storybook/client-api';

import { Checkbox } from 'Common/Form';

export default {
  title: 'Form/Checkbox',
  components: Checkbox,
};

const Template = (args) => {
  const [_, updateArgs] = useArgs({});
  const onChange = (checked) => {
    updateArgs({ checked });
  };
  return <Checkbox {...args} onChange={onChange} />;
};

export const False = Template.bind({});
False.args = {
  id: 'checkbox1',
  name: 'checkbox',
  checked: false,
  label: 'checkbox1',
};

export const True = Template.bind({});
True.args = {
  id: 'checkbox2',
  name: 'checkbox',
  checked: true,
  label: 'checkbox2',
};

export const SizeLG = Template.bind({});
SizeLG.args = {
  id: 'checkbox3',
  name: 'checkbox',
  checked: false,
  label: 'checkbox3',
  size: 'lg',
};
