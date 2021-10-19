import styled from 'styled-components';
import { text, emphasis } from './font-theme';

export const Button = styled.button`
  text-transform: uppercase;
  border: 3px solid #020001;
  ${emphasis('14px')};
  background-color: #fff;
  padding: 10px 16px;
`;
