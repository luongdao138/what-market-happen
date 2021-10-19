import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: var(--bg-secondary);
  .mobile-menu {
    color: var(--text-contrastText);
    font-size: 25px;
    cursor: pointer;
    @media (min-width: 720px) {
      display: none;
    }
  }
  .content {
    width: 1200px;
    max-width: 95%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    .logo {
      @media (max-width: 1000px) {
        width: 150px;
      }
    }
  }
`;
