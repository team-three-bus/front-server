import React from 'react';

import * as S from './RegisterTerm.styles';

import { Layout } from 'Common/Layout';
import { ContentArea } from 'Common/ContentArea';
import { NormalTitle } from 'Common/NormalTitle';
import { Terms } from 'Common/Terms';
import { Btn, BtnArea } from 'Common/Btn';

const View = ({ termList, setTermList, confirmRegister }) => {
  return (
    <Layout header='sub' title='회원가입' bottomnav={false} hiddenFooter={true}>
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
          all={termList.all}
          terms={termList.terms}
          onChange={setTermList}
        />
      </ContentArea>
      <BtnArea position='bottom'>
        <Btn
          sort='default'
          disabled={!termList.all.checked}
          onClick={confirmRegister}
        >
          확인
        </Btn>
      </BtnArea>
    </Layout>
  );
};

export default View;
