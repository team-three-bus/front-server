import styled from 'styled-components';

export const Layout = styled.div`
  height: 100%;
  background: #fff;

  ${({ bottomnav }) => {
    switch (bottomnav) {
      case true:
        return `
        padding-bottom: 80px;
      `;
    }
  }}
`;

export const Wrap = styled.div`
  height: 100%;
  box-sizing: border-box;
`;
