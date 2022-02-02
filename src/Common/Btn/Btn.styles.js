import styled from 'styled-components';

export const Btn = styled.button`
  width: 100%;
  height: 48px;
  border: 1px solid #ef586a;
  border-radius: 16px;
  box-sizing: border-box;
  background: #ef586a;
  text-align: center;
  font-family: NanumSquareRound;
  font-size: 14px;
  font-weight: 800;
  line-height: 16px;
  letter-spacing: 0em;
  color: #fff;
  cursor: pointer;
  
  ${({ option }) => {
    switch (option) {
      case "add":
        return `
          width: calc(100% - 40px);
          margin: 24px 0 0 20px;
        `
    }
  }}

  ${({ disabled }) => {
    switch (disabled) {
      case true:
        return `
        color: rgba(255,255,255,.8);
        background: #CED4DA;
        border:1px solid #CED4DA;
      `;
    }
  }}
`;

export const BtnArea = styled.div``;
