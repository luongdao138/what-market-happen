import styled from 'styled-components';
import { text, emphasis, title, koreanText } from '../../shared/font-theme';

export const FooterWrapper = styled.div`
  .content {
    width: 1200;
    max-width: 95%;
    margin: auto;
    padding: 60px 0;

    .footer-item {
      span.title {
        ${title('12px', 'var(--text-dark)')};
        display: block;
        margin-bottom: 10px;
      }
      li.value {
        margin-bottom: 4px;
      }
      li.value a {
        ${koreanText('12px', 'var(--text-dark)')};
        @media (max-width: 960px) {
          ${koreanText('10px', 'var(--text-dark)')};
        }
      }
    }

    .footer-top {
      display: flex;
      justify-content: space-between;
      @media (max-width: 660px) {
        flex-direction: column;
      }

      .left {
        @media (max-width: 660px) {
          margin-bottom: 40px;
        }
      }

      .right {
        display: flex;
        .footer-item {
          margin-left: 50px;
          @media (max-width: 960px) {
            margin-left: 30px;
          }
          :first-child {
            margin: 0;
          }
        }
        @media (max-width: 450px) {
          .footer-item {
            margin-left: 0;
          }
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        }
      }
    }

    .divider {
      height: 1px;
      width: 100%;
      background-color: #f4f4f4;
      margin-top: 40px;
      margin-bottom: 15px;
    }

    .footer-bottom {
      display: flex;
      @media (max-width: 550px) {
        flex-direction: column;
      }
      .left {
        flex: 1.5;
        ${koreanText('12px', 'var(--text-light)')};
        @media (max-width: 960px) {
          ${koreanText('10px', 'var(--text-light)')};
        }
        @media (max-width: 550px) {
          margin-bottom: 20px;
        }
      }
      .right {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        img {
          margin-left: 20px;
        }
      }
    }
  }
`;
