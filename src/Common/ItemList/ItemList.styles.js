import styled from 'styled-components';

export const ItemList = styled.ul`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  margin: 0;
  padding-left: 21px;
  padding-right: 21px;
  list-style: none;
`;

export const Item = styled.li`
  width: -webkit-calc(50% - 12px);
`;
