import styled from 'styled-components';

export const Empty = styled.div`
  text-align: center;
  padding-bottom: 24px;
  box-sizing: border-box;
  ${({ full }) => {
    switch (full) {
      case true:
        return `
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
        `;
    }
  }}

  img {
    width: 114px;
  }
`;

export const Text = styled.p`
  font-family: NanumSquare;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  color: rgba(207, 207, 207, 1);
`;
