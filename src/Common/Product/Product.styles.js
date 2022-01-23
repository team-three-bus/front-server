import styled from 'styled-components';

import IconPlus from './img/iconPlus.svg';
import IconLike from './img/iconLike.svg';

export const Product = styled.div`
  display: inline-block;
  width: 100%;
`;

export const ImgBox = styled.div`
  display: inline-block;
  position: relative;
  overflow: hidden;

  box-sizing: border-box;
  border: 1px solid #f6f6f6;
  border-radius: 8px;

  ${({ size }) => {
    switch (size) {
      case 'sm':
        return `
          width: 135px;
          height: 135px;
          padding-bottom: 0;
        `;
    }
    return `
      width: 100%;
      height: 0;
      padding-bottom: 100%;
    `;
  }}
`;
export const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto auto;
  max-width: 50%;
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
`;
export const Like = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  bottom: 0;
  right: 0;
  background: url(${IconLike}) center no-repeat;
`;

export const Info = styled.div``;

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
      case 'cu':
        return `
          color: #ABCC44;
          border-color: #ABCC44;
        `;
      case 'gs25':
        return `
          color: #007BFF;
          border-color: #007BFF;
        `;
      case 'seven11':
        return ``;
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
  margin-top: 5px;
  margin-bottom: 4px;
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
`;
