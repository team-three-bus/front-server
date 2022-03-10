import React from 'react';

import * as S from './RegisterTerm.styles';

import { Layout } from 'Common/Layout';
import { ContentArea } from 'Common/ContentArea';
import { NormalTitle } from 'Common/NormalTitle';
import { Terms } from 'Common/Terms';
import { Btn, BtnArea } from 'Common/Btn';
import * as H from 'Common/Helper';

const View = () => {
  return (
    <Layout header='sub' title='회원가입' bottomnav={false}>
      <ContentArea>
        <NormalTitle
          title={
            <>
              편하 서비스 이용을 위해 <br />
              약관에 동의해 주세요.
            </>
          }
        />
        <Terms
          all={{
            label: '모든 약관에 동의합니다.',
            checked: false,
          }}
          terms={[
            {
              label: (
                <>
                  <H.PrimaryColor>(필수)</H.PrimaryColor> 서비스 이용약관 동의
                </>
              ),
              id: 'serviceTerm',
              checked: false,
              link: '/',
            },
            {
              label: (
                <>
                  <H.PrimaryColor>(필수)</H.PrimaryColor> 개인정보처리방침 동의
                </>
              ),
              id: 'peronsalTerm',
              checked: false,
              link: '/',
            },
          ]}
        />
      </ContentArea>
      <BtnArea position='bottom'>
        <Btn sort='default' disabled={true}>
          확인
        </Btn>
      </BtnArea>
    </Layout>
  );
};

export default View;
