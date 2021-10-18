import styled from 'styled-components';
import { emphasis, text } from '../../shared/font-theme';

export const BestProductsWrapper = styled.div`
  margin-top: -10px;
  padding: 10% 0;
  background-size: cover;
  .content {
    width: 1100px;
    margin: auto;
    max-width: 95%;

    .top {
      text-align: center;
      margin-bottom: 30px;
      .big-title {
        ${emphasis('33px', 'var(--secondary-text)')};
        margin-bottom: 15px;
        text-transform: uppercase;
        letter-spacing: 5px;
      }
      .small-title {
        ${text('14px', 'var(--secondary-text)')};
        line-height: 25px;
      }
      @media (max-width: 720px) {
        .big-title {
          ${emphasis('23px', 'var(--secondary-text)')};
          margin-bottom: 10px;
        }
        .small-title {
          line-height: 20px;
        }
      }
      @media (max-width: 550px) {
        .big-title {
          ${emphasis('15px', 'var(--secondary-text)')};
          margin-bottom: 10px;
        }
        .small-title {
          ${text('10px', 'var(--secondary-text)')};
          line-height: 15px;
        }
      }
      @media (max-width: 450px) {
        .big-title {
          ${emphasis('12px', 'var(--secondary-text)')};
          margin-bottom: 5px;
          letter-spacing: 3px;
        }
        .small-title {
          ${text('6px', 'var(--secondary-text)')};
          line-height: 12px;
        }
      }
    }

    .main {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .product-item {
        width: 33.33%;
        img {
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 720px) {
  }
  @media (max-width: 550px) {
  }
  @media (max-width: 450px) {
    padding-left: 40px;
    padding-right: 40px;
    .content {
      .top {
        margin-bottom: 15px;
      }
      .main {
        .product-item {
          width: 100%;
        }
      }
    }
  }
`;
