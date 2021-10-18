import styled from 'styled-components';
import { text } from '../../../shared/font-theme';

export const MenuWrapper = styled.div`
  ul {
    display: flex;
    align-items: center;

    li {
      a {
        display: block;
        padding: 5px 25px;
        text-transform: uppercase;
        ${text('12px', 'var(--text-contrastText)')}
        @media (max-width: 1000px) {
          padding: 5px 15px;
          ${text('10px', 'var(--text-contrastText)')}
        }
      }
    }

    .divider {
      background-color: var(--text-contrastText);
      height: 23px;
      display: block;
      width: 1px;
    }
  }

  @media (max-width: 720px) {
    display: none;
  }
`;
