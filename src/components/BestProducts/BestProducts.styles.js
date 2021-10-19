import styled from 'styled-components';
import { emphasis, text } from '../../shared/font-theme';

export const BestProductsWrapper = styled.div`
  margin-top: -10px;
  padding: 8% 0;
  background-size: cover;
  background-repeat: no-repeat;
  .content {
    width: 1100px;
    margin: auto;
    max-width: 95%;

    .top {
      text-align: center;
      margin-bottom: 50px;
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
          ${text('8px', 'var(--secondary-text)')};
          line-height: 12px;
        }
      }
    }

    .main {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .product-item {
        position: relative;
        width: 33.33%;

        .info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: #fff;
          border: 3px solid #020001;
          padding: 4px;
          height: 60px;
          position: absolute;
          bottom: -25px;
          left: 50%;
          transform: translateX(-50%);
          width: 270px;
          max-width: 90%;
          p.name {
            ${emphasis('14px')};
            margin-right: 20px;
            margin-left: 10px;
          }
          img {
            width: 45px;
          }
          @media (max-width: 960px) {
            bottom: -18px;
            p.name {
              ${emphasis('14px')};
              margin: 0;
              margin-right: 5px;
            }
            img {
              width: 30px;
            }
          }
          @media (max-width: 720px) {
            height: 45px;
            p.name {
              ${emphasis('8px')};
            }
          }
          /* @media (max-width: 550px) {
            p.name {
              ${emphasis('8px')};
            }
          } */
        }

        .label {
          position: absolute;
          top: -30px;
          img {
            width: 60px;
          }
          p {
            ${emphasis('20px')}
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          @media (max-width: 720px) {
            top: -20px;
            img {
              width: 40px;
            }
          }
        }

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
    .main {
      padding-left: 40px;
      padding-right: 40px;
    }
    .content {
      .top {
        margin-bottom: 30px;
      }
      .main {
        .product-item {
          width: 100%;
          margin-bottom: 40px;
          :last-child {
            margin-bottom: 20px;
          }
        }
      }
    }
  }
`;
