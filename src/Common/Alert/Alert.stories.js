import { Alert } from 'Common/Alert';

export default {
  title: 'Modal/Alert',
  components: Alert,
};

const Template = (args) => <Alert {...args} />;

export const Example = Template.bind({});
Example.args = {
  on: true,
  title: '회원탈퇴',
  content: (
    <>
      [설정한닉네임]님, 편하를 이용하는데 <br />
      불편함이 있으셨나요?
      <br /> 가입/로그인하여 편하를 이용하시면 <br />
      상품 추천 정확도가 높아집니다.
      <br /> 그래도 탈퇴하시겠어요?
    </>
  ),
  sort: 'confirm',
  footerBtnLeft: '그냥닫기',
  footerBtnLeftCallback: () => {},
  footerBtnRight: '탈퇴하기',
  footerBtnRightCallback: () => {},
};
