import styled from 'styled-components';

export const Layout = styled.div`
  margin: 0 auto;
  max-width: 768px;
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
  min-height: 100vh;
  box-sizing: border-box;
`;
