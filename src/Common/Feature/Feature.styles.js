import styled from 'styled-components';

export const Feature = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: NanumSquare;
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: 16px;
  text-align: center;
  padding-left: 22px;
  padding-right: 22px;
  height: 37px;
  background: rgba(232, 218, 220, 0.2);
  border-radius: 100px;
`;

export const FeatureBox = styled.div`
  text-align: center;
  padding-top: 24px;
  padding-left: 22px;
  padding-right: 22px;

  ${Feature} {
    margin-bottom: 16px;
    margin-left: 8px;
    margin-right: 8px;
  }
`;
