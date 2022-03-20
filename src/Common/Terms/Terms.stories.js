import { useArgs } from '@storybook/client-api';

import { Terms } from 'Common/Terms';
import * as H from 'Common/Helper';

export default {
  title: 'Terms/Terms',
  components: Terms,
};

const Template = (args) => {
  const [_, updateArgs] = useArgs({});
  const onChange = (props) => {
    updateArgs(props);
  };
  return <Terms {...args} onChange={onChange} />;
};

export const Example = Template.bind({});
Example.args = {
  all: {
    label: '모든 약관에 동의합니다.',
    checked: false,
  },
  terms: [
    {
      label: (
        <>
          <H.PrimaryColor>(필수)</H.PrimaryColor> 서비스 이용약관 동의
        </>
      ),
      id: 'serviceTerm',
      checked: false,
      link: 'http://www.naver.com',
    },
    {
      label: (
        <>
          <H.PrimaryColor>(필수)</H.PrimaryColor> 개인정보처리방침 동의
        </>
      ),
      id: 'peronsalTerm',
      checked: false,
      link: 'http://www.daum.net',
    },
  ],
};
