import styled from 'styled-components';

import { UICheckbox } from 'Common/Form/Checkbox/Checkbox.styles';

export const Terms = styled.div`
  ${UICheckbox} {
    padding: 0;
  }
`;

export const AllTerm = styled.div`
  padding-bottom: 17px;
  border-bottom: 1px solid #ced4da;
  margin-bottom: 18px;
`;

export const Term = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
`;
