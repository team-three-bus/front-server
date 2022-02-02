import { Title } from 'Common/Title';
import { TextBtn } from 'Common/TextBtn';

export default {
  title: 'Title/Title',
  components: Title,
};

const Template = (args) => <Title {...args} />;

export const Example = Template.bind({});
Example.args = {
  title: '제목',
  right: null,
};

export const Rigth = Template.bind({});
Rigth.args = {
  title: '제목',
  right: <TextBtn>모두 지우기</TextBtn>,
};

export const Result = Template.bind({});
Result.args = {
  title: (
    <>
      <strong>총 23</strong>개의 상품이 있습니다
    </>
  ),
  sort: 'result',
  right: null,
};

export const Main = Template.bind({});
Main.args = {
  title: '제목',
  subTitle: '보조 제목',
  sort: 'main',
};

export const MainLike = Template.bind({});
MainLike.args = {
  title: '완전 내 스타일!',
  subTitle: '찜한 상품을 모아서 볼 수 있어요.',
  icon: 'like',
  sort: 'main',
};
