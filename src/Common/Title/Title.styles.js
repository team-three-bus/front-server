import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  padding-top: 24px;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: space-between;
`;

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
          font-size: 15px;
          font-weight: 400;
          color: rgba(159, 159, 159, 1);
          line-height :17.02px;
        `;
    }
    return ``;
  }}
`;

export const Right = styled.div``;
