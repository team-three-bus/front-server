import styled from 'styled-components';

import { Layout } from 'Common/Layout/Layout.styles';

export const ItemList = styled.ul`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  margin: 0;
  padding-left: 21px;
  padding-right: 21px;
  padding-bottom: 80px;
  list-style: none;

  ${Layout} & {
    padding-bottom: 20px;
  }
`;

export const Item = styled.li`
  width: -webkit-calc(50% - 12px);
`;
