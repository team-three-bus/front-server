import React from 'react';
import ReactDOM from 'react-dom';

import * as S from './Alert.styles';

import { Btn } from 'Common/Btn';

const Alert = ({
  on,
  title,
  content = '',
  img = 'default',
  sort = 'confirm',
  footerBtnLeft,
  footerBtnLeftCallback = () => {},
  footerBtnRight,
  footerBtnRightCallback = () => {},
}) => {
  return (
    <S.Alert on={on}>
      <S.Wrap>
        <S.Header>{title}</S.Header>
        <S.Content>
          {content}
          <S.ImgBox img='default' />
        </S.Content>
        <S.Footer>
          <Btn
            sort='default'
            variant='secondary'
            size='textsm'
            onClick={footerBtnLeftCallback}
          >
            {footerBtnLeft}
          </Btn>
          <Btn sort='default' size='textsm' onClick={footerBtnRightCallback}>
            {footerBtnRight}
          </Btn>
        </S.Footer>
      </S.Wrap>
    </S.Alert>
  );
};

const AlertContainer = (props) => {
  const $el =
    document.getElementById('#alert') || document.querySelector('body');

  return ReactDOM.createPortal(<Alert {...props} />, $el);
};
export default AlertContainer;
