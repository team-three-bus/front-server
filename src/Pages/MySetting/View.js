import React from 'react';

import * as S from './MySetting.styles';

import { Layout } from 'Common/Layout';
import { ContentArea } from 'Common/ContentArea';
import { NormalTitle } from 'Common/NormalTitle';
import { Input, FormText } from 'Common/Form';
import { Btn, BtnArea, BtnAlign } from 'Common/Btn';
import { TextBtn } from 'Common/TextBtn';

const View = ({ nickname, setNickname, originNickname, changeNickname }) => {
  return (
    <Layout header='sub' title='정보설정' bottomnav={false}>
      <ContentArea>
        <NormalTitle title='닉네임 설정' />
        <Input
          value={nickname}
          placeholder={originNickname}
          onChange={setNickname}
          maxLength={'10'}
        />
        <FormText>
          편하에서 사용할 닉네임을 입력하여 변경해 주세요. <br />
          최대 10자까지 한글, 숫자, 영문만 입력 가능합니다.
        </FormText>
      </ContentArea>
      <BtnArea position='bottom'>
        <BtnAlign direction='right'>
          <TextBtn variant='line' size='lg'>
            탈퇴하기
          </TextBtn>
        </BtnAlign>
        <Btn
          sort='default'
          disabled={!nickname.length}
          onClick={() => {
            changeNickname(nickname);
          }}
        >
          완료
        </Btn>
      </BtnArea>
    </Layout>
  );
};

export default View;
