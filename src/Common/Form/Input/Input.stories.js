import { useArgs } from '@storybook/client-api';

import { Input } from 'Common/Form';

export default {
  title: 'Form/Input',
  components: Input,
};

const Template = (args) => {
  const [_, updateArgs] = useArgs({});
  const onChange = (value) => {
    updateArgs({ value });
  };
  return <Input {...args} onChange={onChange} />;
};

export const Default = Template.bind({});
Default.args = {
  id: 'input1',
  name: 'input1',
  value: '',
  placeholder: 'placeholder',
};
