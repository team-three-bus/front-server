import { useArgs } from '@storybook/client-api';

import { FormText } from 'Common/Form';

export default {
  title: 'Form/FormText',
  components: FormText,
};

const Template = (args) => {
  const [_, updateArgs] = useArgs({});
  return <FormText {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  children: `
    편하에서 사용할 닉네임을 입력하여 변경해 주세요.
    최대 10자까지 한글, 숫자, 영문만 입력 가능합니다.
  `,
};
