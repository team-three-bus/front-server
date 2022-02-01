import styled from 'styled-components';

import IconLike from './img/icon-like.svg';

export const Wrap = styled.div`
  display: flex;

  padding-left: 20px;
  padding-right: 20px;
  justify-content: space-between;

  ${({ sort }) => {
    switch (sort) {
      case 'result':
        return `
          padding-top: 16px;
          padding-bottom: 16px;
        `;
      case 'main':
        return `
          padding-top: 0;
        `;
      default:
        return `padding-top: 24px;`;
    }
  }}
`;
export const TitleBox = styled.div``;

export const Title = styled.h1`
  color: rgba(239, 88, 106, 1);
  font-family: NanumSquare;
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;

  ${({ sort }) => {
    switch (sort) {
      case 'result':
        return `
          font-family: NanumSquareRound;
          font-size: 12px;
          font-weight: 700;
          text-align: left;
          color: #000000;;
        `;
      case 'main':
        return `
          font-family: NanumSquareRound;
          font-size: 20px;
          font-weight: 800;
          line-height: 24px;
          text-align: left;
          color: #000000;
          margin: 0;
          padding-top: 6px;
          padding-bottom: 6px;
        `;
    }
    return ``;
  }}
`;

export const Icon = styled.span`
  display: inline-block;
  width: 48px;
  height: 48px;
  vertical-align: bottom;
  ${({ icon }) => {
    switch (icon) {
      case 'like':
        return `background: url(${IconLike}) center center no-repeat;`;
    }
  }}
`;
export const SubTitle = styled.h2`
  font-family: NanumSquareRound;
  font-size: 15px;
  font-weight: 400;
  line-height: 17px;
  text-align: left;
  color: #9f9f9f;
  margin: 0;
`;
export const Right = styled.div``;
