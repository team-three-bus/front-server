import React from "react";
import styled from "styled-components";
import mailIcon from "./img/icon_mail.svg";

const FooterWrap = styled.footer`
  display: flex;
  flex-direction: column;
  height: 108px;
  line-height: 11px;
  // padding-bottom: 80px;
  text-align: center;
  letter-spacing: -0.03em;
  color: #212529;
  font-size: 8px;
  font-family: 'Noto Sans KR', sans-serif;
`

const FooterList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 21px;
  > :nth-child(5) {
    opacity: unset;
  }
`

const FooterItem = styled.a`
  text-decoration: none;
  color: inherit;
  opacity: 0.5;
`
  
const FooterBar = styled.div`
  width: 1px;
  height: 10px;
  background: rgba(0,0,0,0.3);
  margin: 0 34.5px;
`

const CopyRight = styled.div`
  margin: 16px 0;
  opacity: 0.5;
`

const Contact = styled.a`
  display: flex;
  align-items:center;
  justify-content:center;
  font-size: 10px;
  line-height: 14px;
  opacity: 1;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
`

const MailIcon = styled.img`
  margin: 2px 4px 0 0;
`

function Footer() {
  return (
    <FooterWrap>
      <FooterList>
        <FooterItem 
          href="https://zenith-axolotl-f4f.notion.site/c1bdc7836ed645b69f40f4c204574420"
          target="_blank"
        >
          서비스 소개
        </FooterItem>
        <FooterBar/>
        <FooterItem 
          href="https://zenith-axolotl-f4f.notion.site/d2c3a932cc4849fcb171025674ae5219"
          target="_blank"
        >
          서비스 이용약관
        </FooterItem>
        <FooterBar/>
        <FooterItem 
          href="https://zenith-axolotl-f4f.notion.site/e8bb9fdd3c434bd9b6803385b9d47dca"
          target="_blank"
        >
          개인정보처리방침
        </FooterItem>
      </FooterList>
      <CopyRight>&copy; Copyright 2022 쓰리버스 All right reserved. </CopyRight>
      <Contact href="mailto:pyunha.contact@gmail.com">
        <MailIcon src={mailIcon} alt="" />Contact us
      </Contact>
    </FooterWrap>
  )
}

export default Footer;