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
