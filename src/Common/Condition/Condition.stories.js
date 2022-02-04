import { useArgs } from '@storybook/client-api';

import { Condition } from './';

export default {
  title: 'Condition/Condition',
  components: Condition,
};

const Template = (args) => {
  const [_, updateArgs] = useArgs();
  const setCondition = (condition) => {
    updateArgs({ condition });
  };
  return <Condition setCondition={setCondition} {...args} />;
};

export const Example = Template.bind({});
Example.args = {
  condition: [
    { id: 0, name: '전체', selected: true },
    { id: 1, name: '간편식사', selected: false },
    { id: 2, name: '빵/과자류', selected: false },
    { id: 3, name: '생수/과채/기타음료', selected: false },
    { id: 4, name: '생활용품', selected: false },
    { id: 5, name: '아이스크림', selected: false },
    { id: 6, name: '유제품/커피 음료', selected: false },
    { id: 7, name: '탄산음료', selected: false },
    { id: 8, name: '기타', selected: false },
  ],
};
