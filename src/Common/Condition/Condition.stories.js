import * as Condition from './';

export default {
  title: 'Condition/Condition',
  components: Condition,
};

const Template = (args) => <Condition.Container {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: (
    <>
      <Condition.Box>
        <Condition.Title>편의점</Condition.Title>
        <Condition.Contents>
          <Condition.Content on={true}>CU</Condition.Content>
          <Condition.Content>GS25</Condition.Content>
          <Condition.Content>Emart24</Condition.Content>
          <Condition.Content>세븐일레븐</Condition.Content>
        </Condition.Contents>
      </Condition.Box>
      <Condition.Box>
        <Condition.Title>카테고리</Condition.Title>
        <Condition.Contents>
          <Condition.Content on={true}>간편식사</Condition.Content>
          <Condition.Content>빵/과자류</Condition.Content>
          <Condition.Content>생수/과채/기타음료</Condition.Content>
          <Condition.Content>생활용품</Condition.Content>
          <Condition.Content>아이스크림</Condition.Content>
          <Condition.Content>유제품/커피 음료</Condition.Content>
          <Condition.Content>탄산음료</Condition.Content>
          <Condition.Content>기타</Condition.Content>
        </Condition.Contents>
      </Condition.Box>
      <Condition.Box>
        <Condition.Title>할인</Condition.Title>
        <Condition.Contents>
          <Condition.Content on={true}>1+1</Condition.Content>
          <Condition.Content>2+1</Condition.Content>
        </Condition.Contents>
      </Condition.Box>
    </>
  ),
};
