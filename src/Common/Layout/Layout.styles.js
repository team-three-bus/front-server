import styled from 'styled-components';

export const Layout = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 768px;
  background: #fff;
  
  ${props => 
    props.isFixed && `
      position: sticky;
      background: #fff;
      z-index: 1;
      top: 0;
      left: 0;
    `
  }
`;

export const Wrap = styled.div`
  min-height: calc(100vh - 64px);
  box-sizing: border-box;
`;
