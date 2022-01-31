import { useArgs } from '@storybook/client-api';

import * as Condition from './';

export default {
  title: 'Condition/Condition',
  components: Condition,
};

const Template = (args) => {
  const [_, updateArgs] = useArgs();
  const setCondition = (condition) => {
    updateArgs({ condition });
  };
  return <Condition.Box setCondition={setCondition} {...args} />;
};
export const Example1 = Template.bind({});
Example1.args = {
  title: '편의점',
  condition: {
    cu: { key: 'cu', name: 'CU', selected: true },
    gs25: { key: 'gs25', name: 'GS25', selected: false },
    emart24: { key: 'emart24', name: 'Emart24', selected: false },
    seven11: { key: 'seven11', name: '세븐일레븐', selected: false },
  },
};

export const Example2 = Template.bind({});
Example2.args = {
  title: '카테고리',
  condition: {
    0: { key: 0, name: '간편식사', selected: true },
    1: { key: 1, name: '빵/과자류', selected: false },
    2: { key: 2, name: '생수/과채/기타음료', selected: false },
    3: { key: 3, name: '생활용품', selected: false },
    4: { key: 4, name: '아이스크림', selected: false },
    5: { key: 5, name: '유제품/커피 음료', selected: false },
    6: { key: 6, name: '탄산음료', selected: false },
    7: { key: 7, name: '기타', selected: false },
  },
};

export const Example3 = Template.bind({});
Example3.args = {
  title: '할인',
  condition: {
    oneone: { key: 'oneone', name: '1+1', selected: true },
    onetwo: { key: 'onetwo', name: '2+1', selected: false },
  },
};

export const Container = Template.bind({});
Container.args = {
  title: '제목',
  condition: {
    0: { key: 2, name: '하나', selected: false },
    1: { key: 1, name: '둘', selected: false },
  },
};
Container.decorators = [
  (Story) => (
    <Condition.Container>
      <Story />
    </Condition.Container>
  ),
];
