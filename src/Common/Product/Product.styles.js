import styled from 'styled-components';

import IconPlus from './img/iconPlus.svg';
import IconPlusOneOne from './img/iconPlusOneOne.png';
import IconPlusTwoOne from './img/iconPlusTwoOne.png';
import IconLike from './img/iconLike.png';
import IconLikeOn from './img/iconLikeOn.png';
import ImgSaleEnd from './img/saleEnd.png';

export const Product = styled.div`
  display: inline-block;
  width: 100%;

  ${({ saleend }) => {
    return saleend ? 'cursor: not-allowed' : '';
  }}

  ${({ size }) => {
    switch (size) {
      case 'lg':
        return `
          display: flex;
          padding-bottom: 48px;
          border-bottom: 2px solid #EFF0F4;
        `;
    }
  }}
`;

export const ImgBox = styled.div`
  display: inline-block;
  position: relative;
  overflow: hidden;

  box-sizing: border-box;
  border: 1px solid #f6f6f6;
  border-radius: 32px;

  ${({ isNoImg }) => {
    switch (isNoImg) {
      case true:
        return `
          background: #F8F9FA;
        `;
    }
  }}

  ${({ size }) => {
    switch (size) {
      case 'sm':
        return `
          width: 135px;
          height: 135px;
          padding-bottom: 0;
          border-radius: 14px;
        `;
      case 'lg':
        return `
          width: 170px;
          height: 170px;
          padding-bottom: 0;
        `;
    }
    return `
      width: 100%;
      height: 0;
      padding-bottom: 100%;
    `;
  }};
`;
export const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto auto;
  max-width: 100%;
  max-height: 100%;
`;
export const Plus = styled.div`
  width: 45px;
  height: 45px;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 12px;
  font-weight: 800;
  line-height: 43px;
  color: #ffffff;
  text-align: center;
  background: url(${IconPlus}) center no-repeat;
  text-indent: -9999px;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    ${({ plus }) => {
      switch (plus) {
        case 'oneone':
        case '1+1':
          return `background: url(${IconPlusOneOne}) center/cover no-repeat;`;
        case '2+1':
        case 'twoone':
          return `background: url(${IconPlusTwoOne}) center/cover no-repeat;`;
      }
    }}
  }
`;
export const Like = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  bottom: 0;
  right: 0;
  background: url(${IconLike}) center no-repeat;
  background-size: 100%;

  ${({ on }) => {
    if (on) {
      return `
        background: url(${IconLikeOn}) center no-repeat;
        background-size: 100%;
      `;
    }
  }}
`;

export const Info = styled.div`
  ${({ size }) => {
    switch (size) {
      case 'lg':
        return `
          width: -webkit-calc(100% - 210px);
          margin-top: 16px;
          flex: 1; 
          padding-left: 16px;
        `;
    }
  }}

  ${({ saleend }) => {
    return saleend ? 'opacity: 0.5;' : '';
  }}
`;

export const StoreType = styled.span`
  display: inline-block;
  box-sizing: border-box;
  border: 1px solid #f6f6f6;
  height: 18px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 9px;
  font-size: 10px;
  font-weight: 800;
  line-height: 16px;

  ${({ type }) => {
    switch (type) {
      case 'emart24':
        return `
          color: #FFB71C;
          border-color: #FFB71C;
        `;
      case 'CU':
      case 'cu':
        return `
          color: #ABCC44;
          border-color: #ABCC44;
        `;
      case 'GS':
      case 'gs':
      case 'gs25':
        return `
          color: #007BFF;
          border-color: #007BFF;
        `;
      case '7-ELEVEN':
      case 'seven11':
        return `
          color: #008061;
          border-color: #008061; 
        `;
      default:
        return `
          color: #121212;
          border-color: #121212;
        `;
    }
  }}
`;
export const Title = styled.p`
  overflow: hidden;
  width: 100%;
  margin-top: 6px;
  margin-bottom: 8px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  text-align: left;
  color: #121212;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Price = styled.div`
  font-family: NanumSquare;
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: #212529;

  ${({ size }) => {
    switch (size) {
      case 'lg':
        return `
          margin-top: 6px;
          font-family: NanumSquareRound;
          font-weight: 800;
        `;
    }
  }};
`;

export const PerPrice = styled.div``;

export const SaleEnd = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.18) url(${ImgSaleEnd}) center center no-repeat;
  background-size: 100%;
`;
