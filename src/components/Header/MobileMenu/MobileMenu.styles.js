import styled from 'styled-components';
import { title } from '../../../shared/font-theme';

export const MobileMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: var(--bg-secondary);
  z-index: 1000;
  display: flex;
  transition: all 0.25s ease-in-out;
  transform-origin: 100% 100%;
  align-items: center;
  justify-content: center;
  transform: ${({ open }) => (open ? 'scaleX(1)' : 'scaleX(0)')};
  .close {
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    color: var(--text-contrastText);
    font-size: 25px;
  }

  ul {
    li {
      text-align: center;
      margin: 20px 0;
      a {
        display: block;
        transition: all 0.25s ease-in-out;
        ${title('18px', 'var(--text-contrastText)')};
        text-transform: uppercase;
        &:hover {
          transform: translateX(10px);
        }
      }
    }
  }
`;
